import * as React from 'react'
import { Button } from './button'

function Contentful (props) {
  return (
    <Button href='https://www.contentful.com/' target='blank' id='contentful'>
      <svg
        aria-labelledby='contentful'
        id='contentful-svg'
        role='img'
        viewBox='0 0 28 28'
        style={{ height: 24 }}
        {...props}
      >
        <title id='contentful-svg' lang='en'>
          Built with Contenful
        </title>
        <g
          transform='translate(-274 -89.3)'
          id='prefix__Mark_w_x2F_o_shadow__x28_wht_x29_'
        >
          <g id='prefix__g49'>
            <g
              transform='matrix(.85714 0 0 .85714 41.143 14.757)'
              id='prefix__g60'
            >
              <g
                id='prefix__g47'
                transform='translate(263.367 77.697) scale(.12993)'
              >
                <path
                  d='M159.1 239.7c-10.9-11-17.7-26-17.7-42.7 0-16.7 6.8-31.7 17.7-42.7 9.3-9.3 9.3-24.3 0-33.5-9.3-9.3-24.3-9.3-33.6 0C106 140.4 94 167.3 94 197.1c0 29.8 12.1 56.7 31.6 76.2 9.3 9.3 24.3 9.3 33.6 0 9.2-9.3 9.2-24.3-.1-33.6z'
                  id='prefix__path37'
                  fill='#ffd75f'
                />
                <path
                  d='M159.1 154.4c11-10.9 26.1-17.7 42.7-17.7 16.7 0 31.8 6.8 42.7 17.7 9.3 9.3 24.3 9.3 33.6 0s9.3-24.3 0-33.5c-19.5-19.5-46.5-31.6-76.3-31.6-29.8 0-56.8 12.1-76.3 31.6-9.3 9.3-9.3 24.3 0 33.5 9.3 9.3 24.4 9.3 33.6 0z'
                  id='prefix__path39'
                  fill='#4fb5e1'
                />
                <path
                  d='M244.6 239.7c-11 10.9-26.1 17.7-42.7 17.7-16.7 0-31.8-6.8-42.7-17.7-9.3-9.3-24.3-9.3-33.6 0s-9.3 24.3 0 33.5c19.5 19.5 46.5 31.6 76.3 31.6 29.8 0 56.8-12.1 76.3-31.6 9.3-9.3 9.3-24.3 0-33.5s-24.3-9.2-33.6 0z'
                  id='prefix__path41'
                  fill='#f05751'
                />
                <path
                  d='M159.1 154.4c-9.3 9.3-24.3 9.3-33.6 0s-9.3-24.3 0-33.5c9.3-9.3 24.3-9.3 33.6 0 9.3 9.2 9.3 24.2 0 33.5z'
                  id='prefix__path43'
                  fill='#0681b6'
                />
                <path
                  d='M159.1 273.3c-9.3 9.3-24.3 9.3-33.6 0-9.3-9.2-9.3-24.3 0-33.5 9.3-9.3 24.3-9.3 33.6 0 9.3 9.2 9.3 24.2 0 33.5z'
                  id='prefix__path45'
                  fill='#cd4739'
                />
              </g>
            </g>
          </g>
        </g>
      </svg>
    </Button>
  )
}

const MemoContentful = React.memo(Contentful)
export default MemoContentful
