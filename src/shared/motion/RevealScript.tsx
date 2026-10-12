import { REVEAL_ARMED_ATTRIBUTE, REVEAL_READY_ATTRIBUTE } from "./reveal";

/**
 * Runs in <head> before paint and arms reveals only when JS and IntersectionObserver exist,
 * so content is never hidden without JS. If the observer is not mounted within 4 s,
 * it disarms and everything stays visible.
 */
const script = `(function(){var d=document.documentElement;if(!("IntersectionObserver" in window))return;d.setAttribute("${REVEAL_ARMED_ATTRIBUTE}","");setTimeout(function(){if(!d.hasAttribute("${REVEAL_READY_ATTRIBUTE}"))d.removeAttribute("${REVEAL_ARMED_ATTRIBUTE}")},4000)})()`;

export function RevealScript() {
  return <script dangerouslySetInnerHTML={{ __html: script }} />;
}
