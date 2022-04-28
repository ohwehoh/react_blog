import React from "react";

export default function View() {
  return (
    <>
      <main id="contents">
        <h2 className="ir_so">컨텐츠 영역</h2>
        <section id="blog-type" className="center">
          <div className="blog__label">
            <h3 className="section__title">음식과 영양</h3>
            <div>
              <span className="author">
                <a href="#">이라라</a>
              </span>
              <span className="date">2022-04-14</span>
              <br />
              <br />
              <span className="modify">
                <a href="blogModify.php?blogID=38">수정</a>
              </span>
              <span className="delete">
                <a href="blogRemove.php?blogID=38">삭제</a>
              </span>
            </div>
            <div className="modDateWrap">
              <span className="modiDate">(수정 : 2022-04-14)</span>
              <br />
            </div>
          </div>
          <div className="container">
            <div className="blog__layout">
              <div className="blog__left">
                <h4>음식과 영양</h4>
                인간은 음식을 먹음으로써 활동과 성장에 필요한 영양소를
                공급받는데, 인체가 필요로 하는 모든 영양소를 한꺼번에 공급해 줄
                수 있는 음식은 없다. 좋은 영양 상태를 유지하려면 여러 영양소가
                균형을 이룰 수 있도록 음식을 골고루 섭취하여야 한다.
                <br />
                <br />
                최적의 건강 상태와 기아, 영양 실조로 인한 사망 사이에서 드러나는
                여러 질병은 식생활을 바꿈으로써 원인이나 완화가 될 수 있다.
                식생활의 부족, 과잉, 불균형은 건강에 부정적인 영향을 줄 수
                있으며, 심리적이고 행동적인 문제뿐만 아니라 괴혈병, 비만,
                골다공증과 같은 질병을 유발하게 된다. 균형 있는 식사를 위해 각
                영양소의 기능과 특성, 함유 식품 및 과부족증에 대해 알아두면
                좋다. 영양 과학은 특정한 식습관이 건강에 어떻게 영향을 주며, 왜
                그러한 영향을 주는지에 대해서 연구한다.
                <br />
                <br />
                음식에 포함된 영양소는 몇가지 범주로 그룹화된다. 다량 영양소는
                지방, 단백질, 탄수화물을 뜻하며, 미량 영양소는 무기질과
                비타민이다. 이밖에도 음식에는 물과 섬유질이 포함되어 있다.
                <br />
                <br />
                *법문 정의
                <br />
                일부 국가에서는 음식에 법적인 정의를 내린다. 이러한 국가들은
                음식을 ‘섭취하기 위해 가공한, 또는 부분적으로 가공하거나
                가공하지 않은 모든 물건’으로 기록하고 있다. 이렇게 정의된 음식
                목록에는 인간이 섭취할 수 있도록 만들어졌거나 가능성이 있는
                어떠한 형태의 음식이라도 포함될 수 있다. 이외에도 음료, 껌,
                물이나 다른 음식이라 부를 수 있는 물질 또한 음식의 법적인 정의의
                일부분으로 되어 있다. 음식의 법적인 정의에 포함되지 않는 음식은
                가축 사료, 팔기 위해 가공되지 않은 살아있는 동물, 수확하지 않은
                식물, 의료 약품, 화장품, 담배, 마약, 잔류물과 오염물이 있다.
                <br />
                <br />
                출처 : https://ko.wikipedia.org/wiki/%EC%9D%8C%EC%8B%9D
              </div>
              <div className="blog__right">
                <div className="ad">
                  <iframe
                    src="https://ads-partners.coupang.com/widgets.html?id=572091&template=carousel&trackingCode=AF4445975&subId=&width=300&height=300"
                    width="300"
                    height="300"
                    frameBorder="0"
                    scrolling="no"
                    referrerPolicy="unsafe-url"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
