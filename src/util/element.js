export function getEleHeight(ele) {
  return ele.offsetHeight;
}

export function addEventListener(ele, event, cb, useCapture) {
  ele.addEventListener(event, cb, useCapture);
}

export function removeEventListener(ele, event, cb, useCapture) {
  ele.removeEventListener(event, cb, useCapture);
}