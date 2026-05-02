export function RegisterPatternLayer() {
  return (
    <div
      className="pointer-events-none absolute inset-y-0 right-0 left-[calc(8px+((100%-16px)*0.502)+6px)] hidden overflow-hidden lg:block"
      aria-hidden="true"
    >
      <svg
        className="block size-full opacity-100"
        width="100%"
        height="100%"
        preserveAspectRatio="none"
      >
        <defs>
          <pattern
            id="register-light-grid"
            width="8"
            height="8"
            patternUnits="userSpaceOnUse"
          >
            <rect width="2" height="2" rx="0.32" fill="#bfbfbf" opacity="0.14" />
          </pattern>

          <pattern
            id="register-mid-grid"
            width="8"
            height="8"
            patternUnits="userSpaceOnUse"
          >
            <rect width="2" height="2" rx="0.32" fill="#b2b2b2" opacity="0.48" />
          </pattern>

          <pattern
            id="register-dark-grid"
            width="8"
            height="8"
            patternUnits="userSpaceOnUse"
          >
            <rect width="2" height="2" rx="0.32" fill="#a5a5a5" opacity="0.68" />
          </pattern>

          <radialGradient id="register-patch-a" cx="0.18" cy="0.12" r="0.38">
            <stop offset="0" stopColor="white" stopOpacity="1" />
            <stop offset="0.52" stopColor="white" stopOpacity="0.48" />
            <stop offset="1" stopColor="white" stopOpacity="0" />
          </radialGradient>

          <radialGradient id="register-patch-b" cx="0.66" cy="0.23" r="0.34">
            <stop offset="0" stopColor="white" stopOpacity="0.92" />
            <stop offset="0.54" stopColor="white" stopOpacity="0.42" />
            <stop offset="1" stopColor="white" stopOpacity="0" />
          </radialGradient>

          <radialGradient id="register-patch-c" cx="0.28" cy="0.78" r="0.38">
            <stop offset="0" stopColor="white" stopOpacity="0.9" />
            <stop offset="0.54" stopColor="white" stopOpacity="0.4" />
            <stop offset="1" stopColor="white" stopOpacity="0" />
          </radialGradient>

          <radialGradient id="register-patch-d" cx="0.9" cy="0.82" r="0.4">
            <stop offset="0" stopColor="white" stopOpacity="0.96" />
            <stop offset="0.52" stopColor="white" stopOpacity="0.44" />
            <stop offset="1" stopColor="white" stopOpacity="0" />
          </radialGradient>

          <mask id="register-mask-a" maskContentUnits="objectBoundingBox">
            <rect width="1" height="1" fill="url(#register-patch-a)" />
          </mask>
          <mask id="register-mask-b" maskContentUnits="objectBoundingBox">
            <rect width="1" height="1" fill="url(#register-patch-b)" />
          </mask>
          <mask id="register-mask-c" maskContentUnits="objectBoundingBox">
            <rect width="1" height="1" fill="url(#register-patch-c)" />
          </mask>
          <mask id="register-mask-d" maskContentUnits="objectBoundingBox">
            <rect width="1" height="1" fill="url(#register-patch-d)" />
          </mask>
        </defs>

        <rect width="100%" height="100%" fill="url(#register-light-grid)" />
        <rect
          width="100%"
          height="100%"
          fill="url(#register-mid-grid)"
          mask="url(#register-mask-a)"
        />
        <rect
          width="100%"
          height="100%"
          fill="url(#register-dark-grid)"
          mask="url(#register-mask-b)"
        />
        <rect
          width="100%"
          height="100%"
          fill="url(#register-mid-grid)"
          mask="url(#register-mask-c)"
        />
        <rect
          width="100%"
          height="100%"
          fill="url(#register-dark-grid)"
          mask="url(#register-mask-d)"
        />
      </svg>
    </div>
  );
}
