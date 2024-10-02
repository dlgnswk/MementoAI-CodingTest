# MementoAI-CodingTest

MementoAI 채용 연계형 인턴 개발자 채용 과정 코딩테스트 레포지토리입니다.

## 문제

> 전화번호가 문자열 phone_number로 주어지고 전화번호의 뒷 4자리를 제외한 나머지 숫자를 \*로 가린 문자열을 리턴하는 solution 함수를 작성하시오.

## 의사 코드

```
1. 인자로 받은 phone_number 문자열을 배열로 변환해 마스킹하지 않을 문자열 번호만 구한다.
2. 구한 문자열 번호 4자리를 전체번호에서 뺀 나머지 번호의 길이를 *로 채워준다.
3. 해당 문자열을 리턴한다.
```

## 테스트

| phone_number           | return                     |
| ---------------------- | -------------------------- |
| "01033334444"          | "**\*\*\***4444"           |
| "027778888"            | "**\***8888"               |
| "00000000000000000000" | "******\*\*\*\*******0000" |
| "1111"                 | "1111"                     |
