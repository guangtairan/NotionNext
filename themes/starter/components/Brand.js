/* eslint-disable @next/next/no-img-element */

import { siteConfig } from '@/lib/config'

/**
 * 合作伙伴
 * @returns
 */
export const Brand = () => {
  const brands = siteConfig('STARTER_BRANDS')
  return (
    <>
      {/* <!-- ====== Brands Section Start --> */}
      <section className='py-20 dark:bg-dark'>
        <section className='py-20 dark:bg-dark'>
        <div className='container px-4'>
          <div className='mb-3 text-3xl font-bold leading-[1.2] text-dark dark:text-white sm:text-4xl md:text-[40px]'>合作伙伴
          <div className='-mx-4 flex flex-wrap items-center justify-center gap-8 xl:gap-11'>
            {brands?.map((item, index) => {
              return (
                <a key={index} href={item.URL}>
                  <img
                    src={item.IMAGE}
                    alt={item.TITLE}
                    className='dark:hidden'
                  />
                  <img
                    src={item.IMAGE_WHITE}
                    alt={item.TITLE}
                    className='hidden dark:block'
                  />
                </a>
              )
            })}
          </div>
        </div>
      </section>
      {/* <!-- ====== Brands Section End --> */}
    </>
  )
}
