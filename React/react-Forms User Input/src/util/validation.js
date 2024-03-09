// 유효성 검사 함수 예시들

// 특정 데이터가 이메일인지 아닌지 확인하는 검사 - 필요할 때마다 원하는 곳에 사용 가능
export function isEmail(value) {
  return value.includes("@");
}

export function isNotEmpty(value) {
  return value.trim() !== "";
}

export function hasMinLength(value, minLength) {
  return value.length >= minLength;
}

export function isEqualsToOtherValue(value, otherValue) {
  return value === otherValue;
}
