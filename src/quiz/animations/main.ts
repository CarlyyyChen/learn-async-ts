const aliceTumbling1: Keyframe[] = [
  { transform: "rotate(0) scale(1)" },
  { transform: "rotate(360deg) scale(0)" },
];

const aliceTiming1: KeyframeEffectOptions = {
  duration: 2000,
  iterations: 1,
  fill: "forwards",
};

const alice10 = document.querySelector<HTMLElement>("#alice1");
const alice20 = document.querySelector<HTMLElement>("#alice2");
const alice30 = document.querySelector<HTMLElement>("#alice3");

/**
 * Asynchronously animating three alices
 */
async function animate(): Promise<void> {
  try {
    if (alice10) {
      await alice10.animate(aliceTumbling1, aliceTiming1).finished;
    } else {
      console.warn("#alice1 not found");
    }

    if (alice20) {
      await alice20.animate(aliceTumbling1, aliceTiming1).finished;
    } else {
      console.warn("#alice2 not found");
    }

    if (alice30) {
      await alice30.animate(aliceTumbling1, aliceTiming1).finished;
    } else {
      console.warn("#alice3 not found");
    }
  } catch (err) {
    if (err instanceof Error) {
      console.log(`Error when animating: ${err.message}`);
    } else {
      console.log("Error when animating: An unknown error occurred");
    }
  }
}

animate();
