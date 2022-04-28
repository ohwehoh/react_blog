import React from 'react'

export default function Login() {
  return (
    <>
      <main id="main" class="gray">
        <section class="join-type gray">
            <div class="member-form">
                <h3>로그인</h3>
                <form action="loginSave.php" name="login" method="post">
                    <fieldset>
                        <legend class="ir_so">로그인 입력폼</legend>
                        <div class="join-box">
                            <div>
                                <label for="youEmail">이메일</label>
                                <input type="email" id="youEmail" name="youEmail" placeholder="Sample@naver.com" autocomplete="off" autofocus required/>
                            </div>
                            <div>
                                <label for="youPass">비밀번호</label>
                                <input type="password" id="youPass" name="youPass" placeholder="비밀번호를 적어주세요!" autocomplete="off" required/>
                            </div>
                        </div>
                        <button id="joinBtn" class="join-submit" type="submit">로그인</button>
                    </fieldset>
                </form>
            </div>
        </section>
      </main>
    </>
  )
}