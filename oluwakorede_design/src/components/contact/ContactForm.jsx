import { ArrowRight, Check, Loader2 } from 'lucide-react'
import { Controller, useForm } from 'react-hook-form'
import { cn } from '@/lib/utils'

const fieldClass =
  'h-[52px] w-full rounded-[14px] border-[1.5px] border-ink/25 bg-cream px-4 font-sans text-base text-ink placeholder:text-plum/60 focus:border-wine focus:shadow-[0_0_0_3px_rgba(110,31,61,.15)] focus:outline-none aria-[invalid=true]:border-[#B3261E] lg:text-[15px]'

function Field({ id, label, optional, error, children, className }) {
  return (
    <div className={cn('flex flex-col gap-2', className)}>
      <label htmlFor={id} className="text-[13px] font-semibold">
        {label} {optional && <span className="font-normal text-plum">(optional)</span>}
      </label>
      {children}
      {error && (
        <p id={`${id}-error`} role="alert" className="m-0 text-[13px] text-[#B3261E]">
          {error}
        </p>
      )}
    </div>
  )
}

function ChoiceGroup({ legend, hint, options, value, onChange, multiple = false, shape = 'pill' }) {
  const isOn = (id) => (multiple ? value.includes(id) : value === id)
  const toggle = (id) => {
    if (multiple) onChange(isOn(id) ? value.filter((v) => v !== id) : [...value, id])
    else onChange(isOn(id) ? '' : id)
  }
  return (
    <fieldset className="m-0 min-w-0 flex-1 border-0 p-0">
      <legend className="mb-2.5 p-0 text-[13px] font-semibold">
        {legend} {hint && <span className="hidden font-normal text-plum lg:inline">{hint}</span>}
      </legend>
      <div className="flex flex-wrap gap-2">
        {options.map((opt) => {
          const on = isOn(opt.id)
          return (
            <button
              key={opt.id}
              type="button"
              aria-pressed={on}
              onClick={() => toggle(opt.id)}
              className={cn(
                'inline-flex min-h-11 items-center gap-1.5 border-[1.5px] px-3.5 font-semibold transition-colors',
                shape === 'pill' ? 'rounded-full text-sm lg:px-4' : 'rounded-xl text-[13px]',
                on
                  ? shape === 'pill'
                    ? 'border-wine bg-wine text-paper'
                    : 'border-ink bg-ink text-paper'
                  : 'border-ink/30 bg-transparent text-ink hover:border-ink',
              )}
            >
              {on && shape === 'pill' && <Check aria-hidden="true" className="size-3.5" strokeWidth={3} />}
              {opt.label}
            </button>
          )
        })}
      </div>
    </fieldset>
  )
}

/**
 * "Start a project" enquiry form.
 * @param {{ options: { services, budgets, timelines }, defaultService?: string, onSubmit: (values) => Promise<void> }} props
 */
export function ContactForm({ options, defaultService, onSubmit }) {
  const {
    register,
    control,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      name: '',
      email: '',
      company: '',
      services: [defaultService ?? options.services[0]?.id].filter(Boolean),
      budget: '',
      timeline: '',
      message: '',
    },
  })

  const submit = async (values) => {
    try {
      await onSubmit(values)
    } catch (err) {
      setError('root', { message: err.message })
    }
  }

  const toOptions = (list) => list.map((label) => ({ id: label, label }))

  return (
    <form onSubmit={handleSubmit(submit)} noValidate className="flex flex-col gap-5 lg:h-full lg:gap-[22px]">
      <div>
        <h3 className="m-0 font-serif text-[32px] leading-none font-normal lg:text-[40px]">Start a project</h3>
        <p className="m-0 mt-1 text-sm text-plum lg:mt-1.5 lg:text-[15px]">
          A few details help me prepare<span className="hidden lg:inline"> for our first chat</span>.
        </p>
      </div>

      <div className="flex flex-col gap-5 lg:flex-row lg:gap-4">
        <Field id="cf-name" label="Your name" error={errors.name?.message} className="flex-1">
          <input
            id="cf-name"
            type="text"
            autoComplete="name"
            placeholder="Jane Doe"
            data-autofocus
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? 'cf-name-error' : undefined}
            className={fieldClass}
            {...register('name', { required: 'Please tell me your name.' })}
          />
        </Field>
        <Field id="cf-email" label="Email address" error={errors.email?.message} className="flex-1">
          <input
            id="cf-email"
            type="email"
            autoComplete="email"
            placeholder="jane@brand.com"
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? 'cf-email-error' : undefined}
            className={fieldClass}
            {...register('email', {
              required: 'Please add an email so I can reply.',
              pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'That email address looks incomplete.' },
            })}
          />
        </Field>
      </div>

      <Field id="cf-company" label="Company or brand" optional>
        <input
          id="cf-company"
          type="text"
          autoComplete="organization"
          placeholder="Your brand name or website"
          className={fieldClass}
          {...register('company')}
        />
      </Field>

      <Controller
        control={control}
        name="services"
        render={({ field }) => (
          <ChoiceGroup
            legend="What do you need?"
            hint="Pick all that apply"
            options={options.services}
            value={field.value}
            onChange={field.onChange}
            multiple
          />
        )}
      />

      <div className="flex flex-col gap-5 lg:flex-row lg:gap-6">
        <Controller
          control={control}
          name="budget"
          render={({ field }) => (
            <ChoiceGroup legend="Budget" options={toOptions(options.budgets)} value={field.value} onChange={field.onChange} shape="box" />
          )}
        />
        <Controller
          control={control}
          name="timeline"
          render={({ field }) => (
            <ChoiceGroup
              legend="When would you like to start?"
              options={toOptions(options.timelines)}
              value={field.value}
              onChange={field.onChange}
              shape="box"
            />
          )}
        />
      </div>

      <Field id="cf-message" label="Tell me about your project" error={errors.message?.message} className="lg:flex-1">
        <textarea
          id="cf-message"
          placeholder="What are you making, who is it for, and what does success look like?"
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? 'cf-message-error' : undefined}
          className={cn(fieldClass, 'h-[150px] resize-none py-3.5 leading-normal lg:h-auto lg:min-h-[110px] lg:flex-1')}
          {...register('message', { required: 'A sentence or two about the project helps a lot.' })}
        />
      </Field>

      {errors.root && (
        <p role="alert" className="m-0 rounded-xl bg-blush/60 px-4 py-3 text-sm text-ink">
          {errors.root.message}
        </p>
      )}

      <div className="flex flex-col-reverse gap-3 lg:flex-row lg:items-center lg:justify-between lg:gap-5">
        <span className="max-w-[300px] self-center text-center text-xs text-plum lg:self-auto lg:text-left lg:text-[13px]">
          Your details are only used to reply to your enquiry.
        </span>
        <button
          type="submit"
          disabled={isSubmitting}
          className="lift inline-flex min-h-14 items-center justify-center gap-3 rounded-full bg-wine px-[30px] text-[17px] font-bold text-paper disabled:opacity-70 lg:text-base"
        >
          {isSubmitting ? (
            <>
              Sending
              <Loader2 aria-hidden="true" className="size-[18px] animate-spin" />
            </>
          ) : (
            <>
              Send message
              <ArrowRight aria-hidden="true" className="size-[18px]" strokeWidth={2} />
            </>
          )}
        </button>
      </div>
    </form>
  )
}
