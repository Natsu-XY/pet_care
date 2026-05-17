"use client";

import { FormEvent, useState } from "react";

const fieldClass =
  "min-h-12 w-full rounded-lg border border-[#d9e2dd] bg-[#f8fbf9] px-3.5 py-3 text-[#24302b] outline-none transition focus:border-[#77bfa3] focus:ring-4 focus:ring-[#77bfa3]/20";

export default function BookingForm() {
  const [showToast, setShowToast] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    event.currentTarget.reset();
    setShowToast(true);
    window.setTimeout(() => setShowToast(false), 3200);
  }

  return (
    <>
      <form
        id="bookingForm"
        onSubmit={handleSubmit}
        className="grid gap-3.5 rounded-lg bg-white p-[18px] text-[#24302b] shadow-[0_18px_50px_rgba(42,66,56,0.16)] sm:p-6"
      >
        <div className="grid gap-3.5 sm:grid-cols-2">
          <label className="grid gap-2 text-sm font-extrabold text-[#3b4a43]">
            主人姓名
            <input
              className={fieldClass}
              name="name"
              autoComplete="name"
              placeholder="例如：林小姐"
              required
            />
          </label>
          <label className="grid gap-2 text-sm font-extrabold text-[#3b4a43]">
            联系电话
            <input
              className={fieldClass}
              name="phone"
              inputMode="tel"
              autoComplete="tel"
              placeholder="手机号码"
              required
            />
          </label>
        </div>
        <div className="grid gap-3.5 sm:grid-cols-2">
          <label className="grid gap-2 text-sm font-extrabold text-[#3b4a43]">
            宠物类型
            <select className={fieldClass} name="pet" required defaultValue="">
              <option value="">请选择</option>
              <option>小型犬</option>
              <option>中大型犬</option>
              <option>猫咪</option>
              <option>其他宠物</option>
            </select>
          </label>
          <label className="grid gap-2 text-sm font-extrabold text-[#3b4a43]">
            预约项目
            <select
              className={fieldClass}
              name="service"
              required
              defaultValue=""
            >
              <option value="">请选择</option>
              <option>精致洗护</option>
              <option>造型修剪</option>
              <option>猫咪护理</option>
              <option>皮毛养护</option>
            </select>
          </label>
        </div>
        <div className="grid gap-3.5 sm:grid-cols-2">
          <label className="grid gap-2 text-sm font-extrabold text-[#3b4a43]">
            期望日期
            <input className={fieldClass} name="date" type="date" required />
          </label>
          <label className="grid gap-2 text-sm font-extrabold text-[#3b4a43]">
            期望时段
            <select className={fieldClass} name="time" required defaultValue="">
              <option value="">请选择</option>
              <option>上午</option>
              <option>下午</option>
              <option>晚上</option>
            </select>
          </label>
        </div>
        <label className="grid gap-2 text-sm font-extrabold text-[#3b4a43]">
          备注
          <textarea
            className={`${fieldClass} min-h-24 resize-y`}
            name="note"
            placeholder="例如：胆小、皮肤敏感、需要接送、毛发打结等"
          />
        </label>
        <button
          className="min-h-[52px] cursor-pointer rounded-lg bg-[#347d64] px-5 py-3 font-black text-white transition hover:bg-[#2f705a]"
          type="submit"
        >
          提交预约
        </button>
      </form>
      <div
        role="status"
        aria-live="polite"
        className={`pointer-events-none fixed right-[18px] bottom-[18px] z-30 max-w-[calc(100vw-36px)] rounded-lg bg-[#347d64] px-4 py-3.5 text-white shadow-[0_18px_50px_rgba(42,66,56,0.16)] transition duration-200 sm:max-w-[360px] ${
          showToast ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
        }`}
      >
        预约已收到，我们会尽快电话确认。
      </div>
    </>
  );
}
