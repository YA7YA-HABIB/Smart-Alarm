import { useMemo, useState } from "react";
import "./App.css";

const content = {
  ar: {
    brand: "Smart Alarm",
    badge: "نظام إنذار ذكي",
    title: "احصل على تنبيهات فورية في أي وقت وأي مكان",
    subtitle:
      "جهاز Smart Alarm يوضع على السيارة أو أي شيء قيم، ويرسل تنبيهات مباشرة إلى التطبيق عند أي حركة أو محاولة سرقة.",
    download: "حمل التطبيق",
    contact: "تواصل عبر واتساب",
    featuresTitle: "لماذا يميزنا هذا النظام؟",
    features: [
      {
        title: "كشف الحركة الفوري",
        text: "يُرسل تنبيهًا مباشرًا عند أي تحرك غير متوقع أو محاولة اقتحام.",
      },
      {
        title: "تنبيهات ذكية وموثوقة",
        text: "تصل الإشعارات إلى التطبيق بشكل سريع حتى تعرف الحالة فورًا.",
      },
      {
        title: "مناسب للسيارة والمخزن",
        text: "يفيد في حماية السيارات، المحلات، والمعدات أو أي شيء يحتاج حماية.",
      },
      {
        title: "سهولة التثبيت",
        text: "يمكن تركيبه بسرعة مع واجهة بسيطة وسهلة الاستخدام.",
      },
    ],
    plansTitle: "الباقات المتاحة",
    plans: [
      { name: "الباقة الأساسية", time: "لمدة شهر واحد", price: "1.99$" },
      { name: "الباقة المميزة", time: "لمدة عام واحد", price: "19.99$" },
      { name: "الباقة الاحترافية", time: "باقة مدى الحياة", price: "149.99$" },
    ],
  },
  en: {
    brand: "Smart Alarm",
    badge: "Smart security system",
    title: "get instant alarms anyWhere, anyTime",
    subtitle:
      "The Smart Alarm device is placed on a car or any valuable item and sends instant alerts to the app whenever there is movement or tampering.",
    download: "Download app",
    contact: "Contact via WhatsApp",
    featuresTitle: "Why this system stands out",
    features: [
      {
        title: "Instant motion detection",
        text: "It sends an immediate alert when there is any unusual movement or attempted access.",
      },
      {
        title: "Smart and reliable alerts",
        text: "Notifications reach the app quickly so you can respond right away.",
      },
      {
        title: "Perfect for cars and storage",
        text: "Ideal for protecting vehicles, shops, equipment, and any valuable assets.",
      },
      {
        title: "Easy setup",
        text: "It can be installed quickly and used with a simple, clear interface.",
      },
    ],
    plansTitle: "Available plans",
    plans: [
      { name: "Basic Plan", time: "For One Month", price: "1.99$" },
      { name: "Premium Plan", time: "For One Yeare", price: "19.99$" },
      { name: "Professional Plan", time: "Life Time Plane", price: "149.99$" },
    ],
  },
};

function App() {
  const [lang, setLang] = useState("ar");
  const current = useMemo(() => content[lang], [lang]);

  return (
    <main className="app-shell" dir={lang === "ar" ? "rtl" : "ltr"}>
      <section className="hero-section">
        <header className="top-nav">
          <a className="brand" href="#home">
            <img src="/icon.png" alt="Smart Alarm logo" />
            <span>{current.brand}</span>
          </a>
          <div className="language-switcher">
            <button
              className={lang === "ar" ? "active" : ""}
              onClick={() => setLang("ar")}
              type="button">
              عربي
            </button>
            <button
              className={lang === "en" ? "active" : ""}
              onClick={() => setLang("en")}
              type="button">
              EN
            </button>
          </div>
        </header>

        <div className="hero-content" id="home">
          <div className="hero-text">
            <span className="hero-badge">{current.badge}</span>
            <h1>{current.title}</h1>
            <p>{current.subtitle}</p>
            <div className="cta-group">
              <a
                className="download-btn"
                href="https://github.com/YA7YA-HABIB/Smart-Alarm/releases/download/V1.0.0/Smart.alarm.apk"
                target="_self"
                rel="noreferrer">
                {current.download}
              </a>
              <a
                className="whatsapp-btn"
                href="https://wa.me/+963939730486"
                target="_blank"
                rel="noreferrer">
                {current.contact}
              </a>
            </div>
            <div className="stats-row">
              <div>
                <strong>24/7</strong>
                <span>{lang === "ar" ? "مراقبة" : "Monitoring"}</span>
              </div>
              <div>
                <strong>Instant</strong>
                <span>{lang === "ar" ? "تنبيه" : "Alert"}</span>
              </div>
            </div>
          </div>

          <div className="hero-visual">
            <div className="security-card">
              <div className="security-top">
                <span>{current.brand}</span>
                <span>{lang === "ar" ? "مُحمي" : "Protected"}</span>
              </div>
              <div className="security-status">
                <div className="pulse-circle"></div>
                <div>
                  <p>{lang === "ar" ? "حالة الجهاز" : "Device status"}</p>
                  <h3>{lang === "ar" ? "نشط" : "Active"}</h3>
                </div>
              </div>
              <div className="sensor-panel">
                <div>
                  <small>{lang === "ar" ? "كشف الحركة" : "Motion"}</small>
                  <strong>99%</strong>
                </div>
                <div>
                  <small>{lang === "ar" ? "الإنذار" : "Alarm"}</small>
                  <strong>{lang === "ar" ? "مفعل" : "On"}</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="features-section">
        <div className="section-heading">
          <span>{current.featuresTitle}</span>
        </div>
        <div className="feature-grid">
          {current.features.map((feature) => (
            <article className="feature-card" key={feature.title}>
              <div className="feature-icon">⚡</div>
              <h3>{feature.title}</h3>
              <p>{feature.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="plans-section">
        <div className="section-heading plans-heading">
          <span>{current.plansTitle}</span>
        </div>
        <div className="plans-grid">
          {current.plans.map((plan) => (
            <article className="plan-card" key={plan.name}>
              <p>{plan.name}</p>
              <h3>{plan.time}</h3>
              <span>{plan.price}</span>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

export default App;
