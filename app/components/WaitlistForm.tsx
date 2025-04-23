// usar server actions/components
// enviar dados ao firebase
// enviar e-mail com react email
// enviar e-mail usando Resend

export function WaitlistForm() {
  return (
    <form className='flex flex-col md:flex-row gap-2.5 mt-4'>
      <input
        className='border border-borders text-base py-3 px-4 bg-card rounded-sm transition-all duration-200 placeholder:text-accent outline-none focus:border-accent focus:ring-0 focus:shadow-[0_0_0_2px_rgba(255,255,255,0.1)]'
        type={'email'}
        id={'email'}
        required
        placeholder='james@bond.com'
        autoFocus
      />
      <button
        className='bg-card border border-borders text-white pointer text-base py-2 px-4 text-center transition-all duration-200 rounded-sm font-medium hover:bg-hover hover:border-accent'
        type='submit'
      >
        Enviar link
      </button>
    </form>
  );
}
