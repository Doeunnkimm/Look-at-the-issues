# 이슈를 보넷 !    <img width="70px" src="https://user-images.githubusercontent.com/112946860/225900289-825b8d1f-5384-476c-977e-9137c825ea2c.png" />

### 1. 프로젝트 설명
- 본 프로젝트는 [github open API](https://docs.github.com/en/rest/issues/issues?apiVersion=2022-11-28#list-user-account-issues-assigned-to-the-authenticated-user)를 활용한 특정 레포지토리의 issue를 조회할 수 있는 웹 사이트입니다.
- 아래와 같이 레포지토리의 url주소를 통해 이슈를 쉽게 조회할 수 있도록 했습니다.

![image](https://user-images.githubusercontent.com/112946860/225944722-d10ad31d-a9c2-4801-baf0-b431ae89d841.png)

* 메인 페이지
![image](https://user-images.githubusercontent.com/112946860/225975349-99039979-cca7-48e7-8abd-b78e4008c7c2.png)

* 상세 페이지
![image](https://user-images.githubusercontent.com/112946860/225975417-c7a9e0c0-2f1f-4294-b39b-dfc79f5f6b84.png)



- 기간은 22.03.13 ~ 22.03.18 동안 진행했습니다.

### 2. 배포 주소

### 3. 프로젝트 폴더 구조
```
src
│  App.js
│  index.js
│
├─Apis
│      @core.js
│      issues.js
│
├─Components
│  │  Loading.js
│  │
│  └─Layout
│          Header.js
│          index.js
│
├─Pages
│  ├─Detail
│  │      index.js
│  │
│  ├─List
│  │  │  index.js
│  │  │
│  │  └─Components
│  │          Box.js
│  │          PerPage.js
│  │          Sort.js
│  │          style.js
│  │
│  └─Main
│       index.js
│      
├─Routes
│      routing.js
│
├─Stores
│      index.js
│      issue.js
│      issues.js
│      search.js
│
├─Styles
│      common.js
│      global.js
│      theme.js
│
└─Utils
        Pagination.js
```

### 4. 팀원
김도은 | <img width="80" src="https://user-images.githubusercontent.com/112946860/225946174-c843194f-a706-469f-bc40-b374d041f49d.png" />
|--|--|

### 5. 사용 기술 스택
기술 스택 | 종류
|:--|:--|
**언어** |  <img  width="60" src="https://user-images.githubusercontent.com/112946860/225957694-7e3b3669-9216-4271-a7c8-555c8976368b.png" /><br />Javascript
**프론트엔드** | <img width="60" src="https://user-images.githubusercontent.com/112946860/225957071-10a74540-d7b5-457c-821e-91547e62a429.png" /><br />React

사용 라이브러리 | 사용한 부분
|:--|:--|
**emotion** | 스타일 컴포넌트 구성 시 사용
**react-router-dom** | URL에 따라 화면을 렌더링 시 사용
**axios** | api를 통한 비동기 통신 시 사용
**redux-toolkit** | 전역 상태 관리 시 사용

### 6. 요구 사항 구현 내역
> #### 목록 페이지
>> **1. 이슈 목록은 10개 단위로 페이지네이션 구현**<br />▶️ 10페이지 단위로 마지막 페이지에서 다음 페이지 누르면 다음 10페이지 뜨도록<br />▶️ 현재 페이지 숫자는 포커스 되어있도록<br />▶ 버튼은 [맨처음][이전]1, [2], 3, 4, 5 [다음][맨끝]으로 구현<br />
![gittask_1](https://user-images.githubusercontent.com/112946860/225962071-4e27282a-86ec-4916-8cbf-9e438e432dcb.gif)
>
>> **2. 필터 기능 구현**<br />▶️ 생성순/업데이트순/댓글순, 10개/20개/50개 씩 보기
![gittask_2](https://user-images.githubusercontent.com/112946860/225963363-9e4fa96a-8b99-45e4-b46f-fb3a82681a17.gif)
<br /><br />▶️ 뒤로 가기 기능 지원<br/>
-필터 기능에서 뒤로가기
![gittask_3](https://user-images.githubusercontent.com/112946860/225964610-58beb644-1c00-4f9e-80f7-172939dc2022.gif)
<br /><br /><br /><br />-페이지네이션에서 뒤로가기
![gittask_4](https://user-images.githubusercontent.com/112946860/225973666-ca914629-6e61-4efd-b074-4b22fb7e444c.gif)


### 7. 코드 및 깃허브 커밋 컨벤션
커밋 컨벤션 | 내용
|:--|:--|
✨ Feat | 새로운 기능 추가
💄 Design | 사용자 UI 디자인 추가 및 변경
🚑 Fix | 이슈 수정
🛻 Rename | 파일 혹은 폴더명 수정 혹은 이동
🔥 Remove | 파일 혹은 폴더 
