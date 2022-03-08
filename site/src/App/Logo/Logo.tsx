import React from 'react';
import { Box } from '../../../../lib/components';
import { useTextTone } from '../../../../lib/hooks/typography';

interface LogoProps {
  width?: string | number;
  height?: string | number;
  iconOnly?: boolean;
  tone?: 'neutral' | 'secondary';
}

const defaultSize = 32;

const resolveToPxIfUnitless = (value: string | number) =>
  typeof value === 'string' && /[0-9]$/.test(value) ? `${value}px` : value;

export const Logo = ({
  width,
  height,
  tone = 'neutral',
  iconOnly = false,
}: LogoProps) => {
  const defaultWidth = iconOnly ? defaultSize : 164;
  const defaultHeight = defaultSize;

  return (
    <Box
      overflow="hidden"
      className={useTextTone({ tone })}
      style={{
        width: resolveToPxIfUnitless(width ? width : defaultWidth),
        height: resolveToPxIfUnitless(height ? height : defaultHeight),
      }}
    >
      <svg
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        height="100%"
        fill="currentColor"
        // Changed the first value to 20 to crop the whitespace
        viewBox="20 0 560 110"
        enableBackground="new 20 0 560 110"
      >
        <title>BRAID</title>
        {!iconOnly ? (
          <g>
            <path
              d="M224.025,58.845c-1.844-1.644-4.226-3.274-7.08-4.846c-1.447-0.799-2.72-1.424-3.833-1.876c3.36-1.531,6.377-4.104,9-7.682
        c3.318-4.525,5.001-9.386,5.001-14.442c0-8.14-2.941-14.724-8.744-19.569c-5.734-4.787-14.083-7.213-24.817-7.213h-25.817
        c-3.6,0-5.581,1.981-5.581,5.579v92.311c0,3.598,1.98,5.579,5.581,5.579h24.809c25.809,0,38.894-10.175,38.894-30.245
        c0-3.732-0.769-7.214-2.285-10.354C227.643,62.971,225.919,60.537,224.025,58.845z M211.005,88.588
        c-3.206,3.07-7.867,4.628-13.847,4.628h-19.805V60.243h17.354c6.987,0,12.335,1.392,15.891,4.137
        c3.508,2.711,5.212,6.562,5.212,11.771C215.81,81.422,214.237,85.49,211.005,88.588z M206.286,42.179
        c-3.495,3.049-8.021,4.595-13.455,4.595h-15.478V16.687h14.902c6.793,0,11.774,1.195,14.804,3.556
        c2.975,2.321,4.42,5.726,4.42,10.406C211.48,35.36,209.78,39.132,206.286,42.179z"
            />
            <path
              d="M317.007,72.527c-2.145-5.55-4.201-9.806-6.116-12.651c-1.548-2.303-3.412-4.046-5.566-5.207
        c10.205-4.781,15.374-13.07,15.374-24.67c0-9.233-3.115-16.106-9.262-20.426c-6.007-4.218-15.007-6.356-26.752-6.356h-24.23
        c-3.6,0-5.582,1.981-5.582,5.579v93.751c0,2.021,1.218,4.428,7.022,4.428h1.155c5.805,0,7.022-2.407,7.022-4.428V62.262h11.728
        c5.598,0,9.938,0.933,12.896,2.77c2.918,1.815,5.418,5.366,7.428,10.565l10.955,28.258c0.776,2.069,3.111,3.12,6.942,3.12h1.442
        c1.808,0,7.31,0,7.31-3.561c0-0.622-0.164-1.414-0.521-2.482L317.007,72.527z M305.064,31.658c0,4.935-1.645,8.933-5.027,12.227
        c-3.394,3.303-7.378,4.908-12.181,4.908h-17.784V16.687h16.773c5.736,0,10.276,1.313,13.496,3.904
        C303.519,23.153,305.064,26.771,305.064,31.658z"
            />
            <path
              d="M397.683,6.112c-1.005-3.185-5.491-3.185-6.966-3.185h-4.186c-1.477,0-5.968,0-6.947,3.137l-34.192,94.787
        c-0.333,1.005-0.497,1.794-0.497,2.416c0,3.707,5.613,3.707,7.457,3.707h0.72c1.477,0,5.974,0,6.955-3.149l7.925-22.813h40.634
        l8.191,22.774c0.995,3.188,5.491,3.188,6.968,3.188h1.155c1.844,0,7.455,0,7.455-3.707c0-0.745-0.181-1.541-0.507-2.297
        L397.683,6.112z M403.802,67.542h-30.931l14.584-41.393l0.975-3.538l0.815,3.622L403.802,67.542z"
            />
            <path
              d="M462.736,2.928h-1.154c-5.802,0-7.02,2.407-7.02,4.428v95.191c0,2.021,1.218,4.428,7.02,4.428h1.154
        c5.806,0,7.024-2.407,7.024-4.428V7.355C469.76,5.335,468.542,2.928,462.736,2.928z"
            />
            <path
              d="M566.184,15.621c-8.334-8.231-19.526-12.404-33.26-12.404h-29.138c-3.598,0-5.578,1.981-5.578,5.579v92.311
        c0,3.598,1.98,5.579,5.578,5.579h29.138c13.736,0,24.926-4.148,33.257-12.331c8.336-8.188,12.563-21.42,12.563-39.332
        C578.745,37.116,574.517,23.86,566.184,15.621z M563.11,55.022c0,13.218-2.895,22.996-8.604,29.069
        c-5.687,6.054-13.287,9.124-22.591,9.124h-18.51V16.687h18.51c9.301,0,16.899,3.091,22.59,9.19
        C560.215,31.999,563.11,41.807,563.11,55.022z"
            />
          </g>
        ) : null}
        <g>
          <path
            d="M83.543,45.276c-2.079,0-4.146-0.855-5.633-2.534l-13.998-15.8c-8.219-8.887-16.521-8.802-16.583-8.78
        c-0.145,0.008-0.291,0.013-0.438,0.013H36.337v19.579c0,4.153-3.368,7.522-7.524,7.522c-4.155,0-7.523-3.369-7.523-7.522V10.65
        c0-4.154,3.368-7.523,7.523-7.523H46.74c2.574-0.082,15.813,0.186,28.327,13.72l14.104,15.918c2.755,3.109,2.468,7.864-0.642,10.62
        C87.099,44.653,85.316,45.276,83.543,45.276z"
          />
        </g>
        <g>
          <path
            d="M93.616,72.958c-2.08,0-4.147-0.856-5.633-2.532c-2.755-3.11-2.468-7.866,0.642-10.623l15.798-13.997
        c8.853-8.188,8.782-16.366,8.775-16.711c-0.01-0.146-0.008-0.162-0.008-0.309V18.231H93.613c-4.156,0-7.523-3.369-7.523-7.523
        c0-4.153,3.368-7.522,7.523-7.522h27.1c4.157,0,7.524,3.369,7.524,7.522v17.929c0.083,2.533-0.187,15.812-13.717,28.325
        L98.602,71.067C97.172,72.337,95.389,72.958,93.616,72.958z"
          />
        </g>
        <g>
          <path
            d="M102.479,107.072c-3.514,0-15.989-0.97-27.786-13.724L60.589,77.431c-2.755-3.11-2.468-7.864,0.642-10.618
        c3.107-2.759,7.866-2.47,10.619,0.641l13.998,15.796c8.197,8.865,16.416,8.816,16.712,8.777c0.149-0.011,0.169-0.011,0.309-0.008
        h10.556V72.442c0-4.157,3.367-7.523,7.523-7.523c4.155,0,7.523,3.366,7.523,7.523v27.099c0,4.157-3.368,7.524-7.523,7.524H103.02
        C102.873,107.069,102.692,107.072,102.479,107.072z"
          />
        </g>
        <g>
          <path
            d="M55.887,107.072h-27.1c-4.156,0-7.523-3.369-7.523-7.523V81.622c-0.083-2.537,0.186-15.814,13.719-28.323l15.916-14.107
        c3.108-2.757,7.863-2.467,10.619,0.642c2.755,3.109,2.469,7.864-0.642,10.62L45.077,64.45c-8.853,8.189-8.781,16.369-8.774,16.713
        c0.01,0.146,0.008,0.161,0.008,0.308v10.556h19.577c4.156,0,7.523,3.37,7.523,7.522C63.41,103.703,60.043,107.072,55.887,107.072z"
          />
        </g>
      </svg>
    </Box>
  );
};
