import styles from './circleDivider.module.scss';

const CircleDivider = () => {
  return (
    <div className={styles.dividerWrapper}>
      {Array(5).fill('_').map((_, key) => {
        return (
          <div key={key} className={styles.circle}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
              <g>
                <circle cx="8" cy="8" r="8" fill="#FAFFFE" />
              </g>
              <defs>
                <filter id="filter0_d_13_50" x="0" y="0" width="16" height="16" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                  <feOffset dy="4" />
                  <feGaussianBlur stdDeviation="2" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                  <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_13_50" />
                  <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_13_50" result="shape" />
                </filter>
              </defs>
            </svg>
          </div>
        )
      })}
    </div>
  );
}

export default CircleDivider;