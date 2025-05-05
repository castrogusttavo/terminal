import { TickIcon } from '@/app/components/TickIcon';
import { WaitlistForm } from '@/app/components/WaitlistForm';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className='max-w-[900px] m-2 p-3.5 bg-card border border-borders rounded-lg overflow-hidden md:p-5 md:mt-7 md:mx-auto'>
      <main className='flex flex-col gap-8'>
        <section className='mb-8 flex flex-col p-6 bg-card border border-borders rounded-lg shadow-[0_8px_16px_rgba(0,0,0,0.2)]'>
          <span className='text-accent mb-5 font-mono font-semibold text-base bg-black py-2 px-3 rounded-sm border border-boders inline-block w-fit'>
            <span className='font-sans font-medium'>$</span> whoami &&
            subscription --status
          </span>

          <div className='flex flex-wrap gap-6 items-stretch mt-5'>
            {/* user status */}
            <div className='flex-1 md:min-w-[280px] p-4 bg-hover rounded-md border border-borders'>
              <div className=''>
                <h2 className='text-xl mb-3.5 font-bold mt-6'>
                  <span className='text-accent mr-1'>$</span> auth --waitlist
                </h2>
                <p className='wrap-break-word'>
                  Enviearemos um email mágico de confirmação.
                </p>
                <WaitlistForm />
              </div>
            </div>
          </div>
        </section>
        <section className='mb-8 flex flex-col p-6 bg-card border border-borders rounded-lg shadow-[0_8px_16px_rgba(0,0,0,0.2)]'>
          <h2 className='text-xl mb-3.5 font-bold mt-6'>
            <span className='text-accent mr-1'>$</span> plano --features
          </h2>
          <div className='flex flex-wrap gap-6 mt-4'>
            <div className='min-w-[230px] flex-1 flex flex-col items-center justify-center text-center bg-hover rounded-md border border-borders p-6'>
              <Image
                src={'./logo.svg'}
                alt={'A code.dev logo'}
                width={145}
                height={152}
              />
            </div>
            <div className='flex-2 min-w-[280px] flex flex-col gap-4'>
              <div className='p-4 bg-hover rounded-md border border-borders flex gap-4 items-start transition-transform duration-200 hover:-translate-y-0.5 hover:border-accent'>
                <div className='bg-card flex items-center justify-center rounded-full min-w-8 min-h-8'>
                  <TickIcon />
                </div>
                <div>
                  <h4 className='text-base mt-0 mb-0.5 font-bold'>Aprenda</h4>
                  <p className='text-sm m-0 leading-5'>
                    Desenvolva habilidades em algoritmos e estruturas de dados.
                    Enfrente desafios reais que te preparam para o mercado.
                  </p>
                </div>
              </div>
              <div className='p-4 bg-hover rounded-md border border-borders flex gap-4 items-start transition-transform duration-200 hover:-translate-y-0.5 hover:border-accent'>
                <div className='bg-card flex items-center justify-center rounded-full min-w-8 min-h-8'>
                  <TickIcon />
                </div>
                <div>
                  <h4 className='text-base mt-0 mb-0.5 font-bold'>Pratique</h4>
                  <p className='text-sm m-0 leading-5'>
                    Pratique, execute e teste código em várias linguagens.
                    Aprimore suas habilidades de forma prática e imediata.
                  </p>
                </div>
              </div>
              <div className='p-4 bg-hover rounded-md border border-borders flex gap-4 items-start transition-transform duration-200 hover:-translate-y-0.5 hover:border-accent'>
                <div className='bg-card flex items-center justify-center rounded-full min-w-8 min-h-8'>
                  <TickIcon />
                </div>
                <div>
                  <h4 className='text-base mt-0 mb-0.5 font-bold'>Domine</h4>
                  <p className='text-sm m-0 leading-5'>
                    Conquiste badges, suba ligas e acumule XP. A cada desafio
                    superado, acompanhe sua evolução e busque sempre mais!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className='mb-10'>
          <h2 className='text-xl mb-3.5 font-bold mt-6'>
            <span className='text-accent mr-1'>$</span> cat ~/newsletter
          </h2>
          <div className='flex flex-col gap-1.5'>
            <div className='flex flex-col md:flex-row p-6 items-center bg-card border border-borders rounded-lg gap-4 transition-transform duration-200 hover:-translate-y-0.5 hover:bg-hover hover:border-accent'>
              <Link
                href={'https://castrogusttavo.vercel.app/introducing-code-dev'}
                target={'_blank'}
              >
                <button className='bg-black border border-borders text-white cursor-pointer text-base py-2 px-3 text-center transition-all duration-200 rounded-sm font-medium min-w-[140px] shadow-[0_2px_4px_rgba(0,0,0,0.2)]'>
                  Ready
                </button>
              </Link>
              <div className='flex-1'>
                <h3 className='mt-5 mb-1 font-bold text-base'>
                  Welcoming Gusttavo Castro, our new Software Developer
                </h3>
                <p className='m-0 leading-relaxed text-sm'>
                  We're thrilled to share the news that Gusttavo Castro is
                  joining code.dev.
                </p>
              </div>
            </div>
            <div className='flex flex-col md:flex-row p-6 items-center bg-card border border-borders rounded-lg gap-4 transition-transform duration-200 hover:-translate-y-0.5 hover:bg-hover hover:border-accent'>
              <Link
                href={'https://castrogusttavo.vercel.app/introducing-code-dev'}
                target={'_blank'}
              >
                <button className='bg-black border border-borders text-white cursor-pointer text-base py-2 px-3 text-center transition-all duration-200 rounded-sm font-medium min-w-[140px] shadow-[0_2px_4px_rgba(0,0,0,0.2)]'>
                  Ready
                </button>
              </Link>
              <div className='flex-1'>
                <h3 className='mt-5 mb-1 font-bold text-base'>
                  git commit -m "first commit"
                </h3>
                <p className='m-0 leading-relaxed text-sm'>
                  Here's a behind-the-scenes look at the architecture of
                  code.dev.
                </p>
              </div>
            </div>
            <div className='flex flex-col md:flex-row p-6 items-center bg-card border border-borders rounded-lg gap-4 transition-transform duration-200 hover:-translate-y-0.5 hover:bg-hover hover:border-accent'>
              <Link
                href={'https://castrogusttavo.vercel.app/introducing-code-dev'}
                target={'_blank'}
              >
                <button className='bg-black border border-borders text-white cursor-pointer text-base py-2 px-3 text-center transition-all duration-200 rounded-sm font-medium min-w-[140px] shadow-[0_2px_4px_rgba(0,0,0,0.2)]'>
                  Ready
                </button>
              </Link>
              <div className='flex-1'>
                <h3 className='mt-5 mb-1 font-bold text-base'>
                  Engineering scalable IDs with IceBit
                </h3>
                <p className='m-0 leading-relaxed text-sm'>
                  How we built a custom ID generation system.
                </p>
              </div>
            </div>
            <div className='flex flex-col md:flex-row p-6 items-center bg-card border border-borders rounded-lg gap-4 transition-transform duration-200 hover:-translate-y-0.5 hover:bg-hover hover:border-accent'>
              <Link
                href={'https://castrogusttavo.vercel.app/introducing-code-dev'}
                target={'_blank'}
              >
                <button className='bg-black border border-borders text-white cursor-pointer text-base py-2 px-3 text-center transition-all duration-200 rounded-sm font-medium min-w-[140px] shadow-[0_2px_4px_rgba(0,0,0,0.2)]'>
                  Ready
                </button>
              </Link>
              <div className='flex-1'>
                <h3 className='mt-5 mb-1 font-bold text-base'>
                  How code.dev uses Resend to handle waitlist emails
                </h3>
                <p className='m-0 leading-relaxed text-sm'>
                  A sneak peek into how the emails for code.dev are built.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className='flex flex-col text-xs text-muted text-left font-normal'>
        <span className='font-mono pb-1'>$ echo 'copyright 2025'</span>
        <span className='border-t border-borders py-3.5 px-0'>
          © 2025 code.dev. Todos os direitos reservados.
        </span>
      </footer>
    </div>
  );
}
