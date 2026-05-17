import Image from "next/image";
import BookingForm from "./BookingForm";

const services = [
  {
    title: "精致洗护",
    description:
      "适合日常清洁和换季掉毛管理，使用低刺激香波，吹干后做毛发蓬松整理。",
    price: "¥128 起",
    duration: "约 60-90 分钟",
    image:
      "https://images.unsplash.com/photo-1583511655826-05700d52f4d9?auto=format&fit=crop&w=900&q=80",
    alt: "小型犬洗护后坐在护理台上",
  },
  {
    title: "造型修剪",
    description:
      "泰迪、比熊、雪纳瑞等常见造型，先沟通脸型、长度和生活习惯再下剪。",
    price: "¥198 起",
    duration: "约 90-150 分钟",
    image:
      "https://images.unsplash.com/photo-1598133894008-61f7fdb8cc3a?auto=format&fit=crop&w=900&q=80",
    alt: "宠物造型修剪工具和护理场景",
  },
  {
    title: "猫咪护理",
    description:
      "预约制低刺激环境，包含梳毛、局部清洁、指甲修整，可按胆量选择免洗或全套洗护。",
    price: "¥168 起",
    duration: "约 45-120 分钟",
    image:
      "https://images.unsplash.com/photo-1513360371669-4adf3dd7dff8?auto=format&fit=crop&w=900&q=80",
    alt: "猫咪安静地接受护理",
  },
];

const steps = [
  {
    title: "到店评估",
    description: "检查皮肤、耳朵、打结和敏感点，确认可洗护状态。",
  },
  {
    title: "分区清洁",
    description: "脸部、身体、脚垫和尾部单独处理，减少刺激和拉扯。",
  },
  {
    title: "低噪吹整",
    description: "按毛量调节风力，吹干后梳通、修边并拍照交付。",
  },
];

const miniReviews = [
  "猫咪没有被强行吹风，护理记录写得很细，耳朵和脚垫都处理干净了。",
  "接送很准时，回来香味不冲，掉毛季做完蓬松很多，家里也好打扫。",
];

const contacts = [
  {
    title: "门店地址",
    description: "上海市徐汇区梧桐路 88 号 1F",
  },
  {
    title: "接送范围",
    description: "门店 3 公里内可预约接送，雨天和高峰期需提前确认。",
  },
  {
    title: "护理提醒",
    description: "疫苗期、术后恢复期、严重皮肤病请先咨询医生再预约。",
  },
];

function PawMark() {
  return (
    <span
      aria-hidden="true"
      className="grid h-[38px] w-[38px] shrink-0 place-items-center rounded-full bg-[#347d64] text-white shadow-[0_8px_22px_rgba(52,125,100,0.28)]"
    >
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path
          d="M8.5 10.2c1.3 0 2.3-1.3 2.3-2.9S9.8 4.4 8.5 4.4 6.2 5.7 6.2 7.3s1 2.9 2.3 2.9Zm7 0c1.3 0 2.3-1.3 2.3-2.9s-1-2.9-2.3-2.9-2.3 1.3-2.3 2.9 1 2.9 2.3 2.9ZM5.4 15.1c1.1 0 2-1.1 2-2.4s-.9-2.4-2-2.4-2 1.1-2 2.4.9 2.4 2 2.4Zm13.2 0c1.1 0 2-1.1 2-2.4s-.9-2.4-2-2.4-2 1.1-2 2.4.9 2.4 2 2.4ZM12 11.9c-2.2 0-5 2.6-5 5 0 1.5 1.2 2.4 2.6 2.4 1 0 1.5-.5 2.4-.5s1.4.5 2.4.5c1.4 0 2.6-.9 2.6-2.4 0-2.4-2.8-5-5-5Z"
          fill="currentColor"
        />
      </svg>
    </span>
  );
}

function PetMapCard({ title, description }: { title: string; description: string }) {
  return (
    <article className="overflow-hidden rounded-lg border border-[#d9e2dd] bg-white shadow-[0_10px_30px_rgba(42,66,56,0.08)]">
      <div className="p-6 pb-4">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="m-0 mb-2 text-[19px]">{title}</h3>
            <p className="m-0 text-[#65736c]">{description}</p>
          </div>
          <span
            aria-hidden="true"
            className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-[#fff2dc] text-[#d48437] shadow-[0_8px_18px_rgba(212,132,55,0.18)]"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path
                d="M12 21s6-5.1 6-10.5A6 6 0 0 0 6 10.5C6 15.9 12 21 12 21Z"
                fill="currentColor"
              />
              <path
                d="M9.7 11.1c.7 0 1.2-.7 1.2-1.5s-.5-1.5-1.2-1.5-1.2.7-1.2 1.5.5 1.5 1.2 1.5Zm4.6 0c.7 0 1.2-.7 1.2-1.5s-.5-1.5-1.2-1.5-1.2.7-1.2 1.5.5 1.5 1.2 1.5ZM12 11.8c-1.2 0-2.7 1.3-2.7 2.4 0 .8.6 1.2 1.3 1.2.5 0 .8-.3 1.4-.3s.9.3 1.4.3c.7 0 1.3-.4 1.3-1.2 0-1.1-1.5-2.4-2.7-2.4Z"
                fill="white"
              />
            </svg>
          </span>
        </div>
      </div>
      <div className="relative mx-4 mb-4 h-[168px] overflow-hidden rounded-lg border border-[#d7e6dd] bg-[#e8f5ee]">
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.58)_1px,transparent_1px),linear-gradient(0deg,rgba(255,255,255,0.58)_1px,transparent_1px)] bg-[size:34px_34px]" />
        <div className="absolute -left-7 top-8 h-14 w-[118%] rotate-[-8deg] bg-[#fff8ec] shadow-[0_0_0_1px_rgba(217,226,221,0.74)_inset]" />
        <div className="absolute left-[-18px] top-[106px] h-12 w-[112%] rotate-[7deg] bg-[#f8d9c5] shadow-[0_0_0_1px_rgba(238,143,113,0.18)_inset]" />
        <div className="absolute left-[12%] top-[62%] h-3 w-3 rounded-full bg-[#347d64]" />
        <div className="absolute left-[20%] top-[50%] h-2.5 w-2.5 rounded-full bg-[#77bfa3]" />
        <div className="absolute right-[22%] top-[18%] h-3.5 w-3.5 rounded-full bg-[#ee8f71]" />
        <div className="absolute right-[14%] bottom-[18%] h-9 w-9 rounded-full bg-white/78 shadow-[0_6px_18px_rgba(42,66,56,0.12)]" />
        <svg
          aria-hidden="true"
          className="absolute inset-x-[13%] top-[50px] h-[84px] w-[74%]"
          viewBox="0 0 320 110"
          fill="none"
          preserveAspectRatio="none"
        >
          <path
            d="M4 86C48 48 80 102 122 56C164 10 196 14 226 42C254 68 280 61 316 22"
            stroke="#347d64"
            strokeWidth="5"
            strokeLinecap="round"
            strokeDasharray="10 12"
          />
        </svg>
        <div className="absolute left-[48%] top-[31px] grid h-[70px] w-[70px] -translate-x-1/2 place-items-center rounded-full bg-white shadow-[0_14px_34px_rgba(42,66,56,0.18)]">
          <div className="grid h-[52px] w-[52px] place-items-center rounded-full bg-[#347d64] text-white">
            <svg width="31" height="31" viewBox="0 0 24 24" fill="none">
              <path
                d="M8.5 10.2c1.3 0 2.3-1.3 2.3-2.9S9.8 4.4 8.5 4.4 6.2 5.7 6.2 7.3s1 2.9 2.3 2.9Zm7 0c1.3 0 2.3-1.3 2.3-2.9s-1-2.9-2.3-2.9-2.3 1.3-2.3 2.9 1 2.9 2.3 2.9ZM5.4 15.1c1.1 0 2-1.1 2-2.4s-.9-2.4-2-2.4-2 1.1-2 2.4.9 2.4 2 2.4Zm13.2 0c1.1 0 2-1.1 2-2.4s-.9-2.4-2-2.4-2 1.1-2 2.4.9 2.4 2 2.4ZM12 11.9c-2.2 0-5 2.6-5 5 0 1.5 1.2 2.4 2.6 2.4 1 0 1.5-.5 2.4-.5s1.4.5 2.4.5c1.4 0 2.6-.9 2.6-2.4 0-2.4-2.8-5-5-5Z"
                fill="currentColor"
              />
            </svg>
          </div>
        </div>
        <div className="absolute bottom-3 left-3 rounded-full bg-white/88 px-3 py-1.5 text-xs font-bold text-[#347d64] shadow-[0_8px_20px_rgba(42,66,56,0.12)]">
          萌宠地图
        </div>
      </div>
    </article>
  );
}

export default function Home() {
  return (
    <>
      <header className="fixed inset-x-0 top-0 z-20 flex items-center justify-between border-b border-[#d9e2dd]/80 bg-[#fbfaf6]/85 px-4 py-3.5 backdrop-blur-[14px] sm:px-[clamp(18px,5vw,72px)] sm:py-[18px]">
        <a
          className="flex min-w-0 items-center gap-2.5 font-extrabold tracking-normal"
          href="#top"
          aria-label="毛孩子洗护所首页"
        >
          <PawMark />
          <span className="max-w-[116px] overflow-hidden text-ellipsis whitespace-nowrap sm:max-w-none">
            毛孩子洗护所
          </span>
        </a>
        <nav
          className="flex items-center gap-5 whitespace-nowrap text-[15px] text-[#3e5148]"
          aria-label="主导航"
        >
          <a className="hidden border-b-2 border-transparent py-1.5 hover:border-[#ee8f71] md:block" href="#services">
            服务
          </a>
          <a className="hidden border-b-2 border-transparent py-1.5 hover:border-[#ee8f71] md:block" href="#process">
            流程
          </a>
          <a className="hidden border-b-2 border-transparent py-1.5 hover:border-[#ee8f71] md:block" href="#reviews">
            口碑
          </a>
          <a
            className="cta-text-light inline-flex items-center rounded-full bg-[#347d64] px-3 py-2 text-sm font-bold shadow-[0_10px_24px_rgba(52,125,100,0.22)] sm:px-4 sm:py-2.5 sm:text-[15px]"
            href="#booking"
          >
            预约洗护
          </a>
        </nav>
      </header>

      <main id="top" className="overflow-hidden">
        <section className="relative grid min-h-[86vh] items-end bg-[url('https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&w=1800&q=82')] bg-cover bg-[58%_center] px-4 pt-24 pb-7 text-white sm:min-h-[92vh] sm:bg-center sm:px-[clamp(18px,5vw,72px)] sm:pt-[110px] sm:pb-10">
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(22,39,32,0.74),rgba(22,39,32,0.36)_48%,rgba(22,39,32,0.1))]" />
          <div className="relative w-full max-w-[760px] pb-7">
            <span className="mb-4 inline-flex items-center gap-2.5 text-sm font-bold uppercase tracking-normal text-[#eaf5ef] before:h-0.5 before:w-[34px] before:bg-[#ee8f71] before:content-['']">
              Pet Grooming Studio
            </span>
            <h1 className="m-0 max-w-[720px] text-[clamp(42px,8vw,88px)] leading-[0.96] tracking-normal">
              毛孩子洗护所
            </h1>
            <p className="mt-6 max-w-[600px] text-[clamp(17px,2vw,21px)] text-[#edf7f2]">
              给犬猫提供温和洗护、造型修剪、皮毛护理和接送预约。独立洗护间、可视化护理流程，让敏感小朋友也能慢慢放松下来。
            </p>
            <div className="mt-8 flex flex-wrap items-stretch gap-3.5 sm:items-center">
              <a
                className="cta-text-dark inline-flex min-h-12 w-full items-center justify-center rounded-full bg-white px-5 py-3 font-extrabold shadow-[0_18px_50px_rgba(42,66,56,0.16)] transition hover:-translate-y-0.5 sm:w-auto"
                href="#booking"
              >
                立即预约
              </a>
              <a
                className="cta-text-light inline-flex min-h-12 w-full items-center justify-center rounded-full border border-white/70 bg-white/10 px-5 py-3 font-extrabold transition hover:-translate-y-0.5 sm:w-auto"
                href="#services"
              >
                查看项目
              </a>
            </div>
            <div className="mt-10 grid w-full max-w-[940px] overflow-hidden rounded-lg border border-white/30 bg-white/25 backdrop-blur-[14px] md:grid-cols-3">
              {[
                ["1 对 1", "独立护理师全程负责"],
                ["36-38°C", "恒温洗护与低噪吹干"],
                ["可接送", "3 公里内提前预约"],
              ].map(([value, label]) => (
                <div key={value} className="bg-white/15 p-4">
                  <strong className="block text-[22px] leading-tight">{value}</strong>
                  <span className="text-sm text-[#edf7f2]">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="services" className="bg-[#fbfaf6] px-4 py-14 sm:px-[clamp(18px,5vw,72px)] sm:py-[74px]">
          <div className="mx-auto mb-8 grid w-full max-w-[1180px] gap-7 md:flex md:items-end md:justify-between">
            <h2 className="m-0 text-[clamp(30px,4vw,48px)] leading-[1.05] tracking-normal">
              常用洗护项目
            </h2>
            <p className="m-0 max-w-[460px] text-[#65736c]">
              按体型、毛量和皮肤状态确认最终方案。所有项目都包含基础健康观察、耳道清洁、脚底毛和指甲护理。
            </p>
          </div>
          <div className="mx-auto grid w-full max-w-[1180px] gap-[18px] md:grid-cols-3">
            {services.map((service) => (
              <article
                key={service.title}
                className="flex min-h-[370px] flex-col overflow-hidden rounded-lg border border-[#d9e2dd] bg-white shadow-[0_10px_30px_rgba(42,66,56,0.08)]"
              >
                <div className="relative aspect-[4/3] w-full">
                  <Image src={service.image} alt={service.alt} fill className="object-cover" sizes="(min-width: 768px) 33vw, 100vw" />
                </div>
                <div className="flex flex-1 flex-col p-[22px]">
                  <h3 className="m-0 mb-2 text-2xl leading-tight">{service.title}</h3>
                  <p className="m-0 text-[#65736c]">{service.description}</p>
                  <div className="mt-auto flex items-baseline justify-between gap-4 pt-6 text-[27px] font-black text-[#347d64]">
                    {service.price}
                    <span className="text-[13px] font-bold text-[#65736c]">
                      {service.duration}
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="process" className="grid items-center gap-6 bg-[#eef5f0] px-4 py-14 sm:px-[clamp(18px,5vw,72px)] sm:py-[74px] lg:grid-cols-[minmax(0,1.05fr)_minmax(320px,0.95fr)] lg:gap-[clamp(24px,5vw,58px)]">
          <div className="relative min-h-[350px] sm:min-h-[420px] lg:min-h-[560px]">
            <Image
              className="absolute top-0 left-0 h-[275px] w-[76%] rounded-lg border-8 border-white object-cover shadow-[0_18px_50px_rgba(42,66,56,0.16)] sm:h-[330px] lg:h-[440px] lg:w-[72%]"
              src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=1000&q=82"
              alt="两只干净的小狗坐在一起"
              width={1000}
              height={760}
            />
            <Image
              className="absolute right-0 bottom-0 h-[190px] w-[52%] rounded-lg border-8 border-white object-cover shadow-[0_18px_50px_rgba(42,66,56,0.16)] sm:h-[230px] lg:h-[300px] lg:w-[48%]"
              src="https://images.unsplash.com/photo-1537151625747-768eb6cf92b2?auto=format&fit=crop&w=800&q=82"
              alt="宠物护理后蓬松的狗狗"
              width={800}
              height={620}
            />
          </div>
          <div>
            <h2 className="m-0 text-[clamp(32px,4vw,52px)] leading-[1.05]">
              每一步都让宠物更安心
            </h2>
            <p className="mt-5 text-[17px] text-[#65736c]">
              我们把洗护拆成可观察、可暂停的流程，先看情绪再安排水温、风力和修剪节奏。主人也会收到护理记录和照片反馈。
            </p>
            <div className="mt-8 grid gap-3.5">
              {steps.map((step, index) => (
                <div
                  key={step.title}
                  className="grid grid-cols-[44px_minmax(0,1fr)] items-start gap-3.5 rounded-lg border border-[#d9e2dd] bg-white/70 p-4"
                >
                  <div className="grid h-11 w-11 place-items-center rounded-full bg-[#ee8f71] font-black text-white">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="m-0 mb-1 text-lg">{step.title}</h3>
                    <p className="m-0 text-[15px] text-[#65736c]">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="booking" className="bg-[#24302b] px-4 py-14 text-white sm:px-[clamp(18px,5vw,72px)] sm:py-[74px]">
          <div className="mx-auto grid w-full max-w-[1180px] items-start gap-7 lg:grid-cols-[minmax(0,0.95fr)_minmax(340px,1.05fr)] lg:gap-[clamp(28px,5vw,60px)]">
            <div>
              <h2 className="m-0 text-[clamp(32px,5vw,58px)] leading-[1.05]">
                预约一段安静的洗护时间
              </h2>
              <p className="mt-5 text-[17px] text-[#c7d4ce]">
                提交后前台会在 15 分钟内确认时段、宠物状态和预计费用。急单可直接电话联系。
              </p>
              <div className="mt-8 grid gap-2.5 rounded-lg border border-white/20 bg-white/10 p-[22px]">
                {[
                  ["周一至周五", "10:00 - 20:00"],
                  ["周六至周日", "09:30 - 21:00"],
                  ["电话", "021-8808 6626"],
                ].map(([label, value]) => (
                  <div
                    key={label}
                    className="flex justify-between gap-4 border-b border-white/10 pb-2.5 last:border-b-0 last:pb-0"
                  >
                    <span>{label}</span>
                    <strong>{value}</strong>
                  </div>
                ))}
              </div>
            </div>
            <BookingForm />
          </div>
        </section>

        <section id="reviews" className="bg-[#fbfaf6] px-4 py-14 sm:px-[clamp(18px,5vw,72px)] sm:py-[74px]">
          <div className="mx-auto mb-8 grid w-full max-w-[1180px] gap-7 md:flex md:items-end md:justify-between">
            <h2 className="m-0 text-[clamp(30px,4vw,48px)] leading-[1.05]">
              主人们的反馈
            </h2>
            <p className="m-0 max-w-[460px] text-[#65736c]">
              门店复购率来自细节：洗前沟通、洗中耐心、洗后说明，以及宠物愿意再次进门。
            </p>
          </div>
          <div className="mx-auto grid w-full max-w-[1180px] gap-[18px] lg:grid-cols-[1.1fr_0.9fr]">
            <article className="rounded-lg border border-[#d9e2dd] bg-white p-[clamp(24px,4vw,42px)] shadow-[0_10px_30px_rgba(42,66,56,0.08)]">
              <strong className="block text-[38px] leading-none text-[#ee8f71]">“</strong>
              <p className="mt-4 text-[clamp(20px,3vw,32px)] leading-[1.3]">
                我家比熊以前洗澡会一直发抖，这次护理师先陪它熟悉环境，最后修出来的脸型也很自然。
              </p>
              <span className="mt-5 block font-bold text-[#65736c]">
                陈女士 · 比熊「奶盖」
              </span>
            </article>
            <div className="grid gap-[18px]">
              {miniReviews.map((review) => (
                <article
                  key={review}
                  className="rounded-lg border border-[#d9e2dd] bg-white p-6 shadow-[0_10px_30px_rgba(42,66,56,0.08)]"
                >
                  <div className="font-black tracking-normal text-[#d48437]">
                    ★★★★★
                  </div>
                  <p className="mt-2.5 text-[#65736c]">{review}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#eef5f0] px-4 pt-14 pb-8 sm:px-[clamp(18px,5vw,72px)]">
          <div className="mx-auto grid w-full max-w-[1180px] gap-[18px] lg:grid-cols-3">
            {contacts.map((contact) => (
              contact.title === "门店地址" ? (
                <PetMapCard
                  key={contact.title}
                  title={contact.title}
                  description={contact.description}
                />
              ) : (
                <article
                  key={contact.title}
                  className="rounded-lg border border-[#d9e2dd] bg-white p-6 shadow-[0_10px_30px_rgba(42,66,56,0.08)]"
                >
                  <h3 className="m-0 mb-2 text-[19px]">{contact.title}</h3>
                  <p className="m-0 text-[#65736c]">{contact.description}</p>
                </article>
              )
            ))}
          </div>
        </section>
      </main>

      <footer className="bg-[#eef5f0] px-4 py-6 text-center text-sm text-[#65736c] sm:px-[clamp(18px,5vw,72px)]">
        © 2026 毛孩子洗护所 Pet Grooming Studio. 温柔洗护，干净回家。
      </footer>
    </>
  );
}
