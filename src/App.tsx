import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  BookOpen,
  Award,
  Megaphone,
  Gift,
  GraduationCap,
  Star,
  CalendarClock,
  MapPin,
  Clock,
  Instagram,
  X,
  MessageCircle,
  Menu,
  ChevronDown,
} from "lucide-react";
import "./App.css";

// URLs
const IG_URL = "https://instagram.com/zonaenglish.id";
const WA_NUMBER = "6282399627276";

// Form Data Interface
interface FormData {
  nama: string;
  alamat: string;
  usia: string;
  jenisKelamin: string;
  sekolah: string;
  instagram: string;
  alasan: string;
}

function App() {
  const [showModal, setShowModal] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [showFloatingMenu, setShowFloatingMenu] = useState(false);
  const [selectedPremiumClass, setSelectedPremiumClass] = useState<
    "zonaenglish" | "hira"
  >("zonaenglish");
  const [formData, setFormData] = useState<FormData>({
    nama: "",
    alamat: "",
    usia: "",
    jenisKelamin: "",
    sekolah: "",
    instagram: "",
    alasan: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Format message for WhatsApp
    const message = `*Pendaftaran ZonaEnglish School Ambassador 2025*

📝 *Nama:* ${formData.nama}
📍 *Alamat:* ${formData.alamat}
🎂 *Usia:* ${formData.usia} tahun
👤 *Jenis Kelamin:* ${formData.jenisKelamin}
🏫 *Sekolah:* ${formData.sekolah}
📱 *Instagram:* @${formData.instagram}
💭 *Alasan Masuk:* ${formData.alasan}`;

    const whatsappUrl = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, "_blank");

    // Reset form and close modal
    setFormData({
      nama: "",
      alamat: "",
      usia: "",
      jenisKelamin: "",
      sekolah: "",
      instagram: "",
      alasan: "",
    });
    setShowModal(false);
  };

  const openWhatsApp = () => {
    const message =
      "Halo, saya ingin bertanya tentang program ZonaEnglish School Ambassador 2025";
    window.open(
      `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-sky-50 via-white to-white text-slate-800">
      {/* NAVBAR */}
      <nav className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/70 border-b border-slate-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-sky-500 to-blue-600 shadow-sm" />
            <div className="leading-tight">
              <p className="font-bold text-slate-900">ZonaEnglish</p>
              <p className="text-xs text-slate-500">Ambassador 2025 s.d 2026</p>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6 text-sm">
            <a href="#about" className="hover:text-sky-700">
              Tentang
            </a>
            <a href="#benefits" className="hover:text-sky-700">
              Keuntungan
            </a>
            <a href="#apply" className="hover:text-sky-700">
              Cara Daftar
            </a>
            <a href="#testi" className="hover:text-sky-700">
              Testimoni
            </a>
          </div>

          {/* Desktop Button */}
          <button
            onClick={() => setShowModal(true)}
            className="hidden md:inline-flex items-center gap-2 rounded-2xl bg-[#fcd547] px-4 py-2 text-slate-900 font-semibold shadow hover:shadow-md transition-shadow"
          >
            Daftar Sekarang <ArrowRight size={18} />
          </button>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setShowMobileMenu(true)}
            className="md:hidden h-10 w-10 rounded-xl bg-slate-100 hover:bg-slate-200 flex items-center justify-center"
            aria-label="Open menu"
          >
            <Menu size={20} className="text-slate-700" />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {showMobileMenu && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowMobileMenu(false)}
              className="fixed inset-0 z-50 bg-black/50 md:hidden"
            />

            {/* Drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="fixed top-0 right-0 bottom-0 z-50 w-64 bg-white shadow-2xl md:hidden"
            >
              <div className="flex items-center justify-between p-4 border-b border-slate-200">
                <h3 className="font-bold text-slate-900">Menu</h3>
                <button
                  onClick={() => setShowMobileMenu(false)}
                  className="h-8 w-8 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center"
                  aria-label="Close menu"
                >
                  <X size={18} />
                </button>
              </div>

              <nav className="flex flex-col p-4 space-y-1">
                <a
                  href="#about"
                  onClick={() => setShowMobileMenu(false)}
                  className="px-4 py-3 rounded-xl hover:bg-slate-50 text-slate-700 font-medium"
                >
                  Tentang
                </a>
                <a
                  href="#benefits"
                  onClick={() => setShowMobileMenu(false)}
                  className="px-4 py-3 rounded-xl hover:bg-slate-50 text-slate-700 font-medium"
                >
                  Keuntungan
                </a>
                <a
                  href="#apply"
                  onClick={() => setShowMobileMenu(false)}
                  className="px-4 py-3 rounded-xl hover:bg-slate-50 text-slate-700 font-medium"
                >
                  Cara Daftar
                </a>
                <a
                  href="#testi"
                  onClick={() => setShowMobileMenu(false)}
                  className="px-4 py-3 rounded-xl hover:bg-slate-50 text-slate-700 font-medium"
                >
                  Testimoni
                </a>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* HERO */}
      <header className="relative overflow-hidden bg-[#03345c]">
        <div className="absolute inset-0 -z-10">
          <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-[#fcd547] blur-3xl opacity-20" />
          <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-[#fcd547] blur-3xl opacity-20" />
        </div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-24 grid lg:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-[#fcd547]/20 px-4 py-2 text-[#fcd547] text-sm font-bold">
              <span className="text-[#ffff]">ZONA ENGLISH X</span>HIRA ACADEMY
            </span>
            <h1 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
              Zona English Ambassador - School & Campus
            </h1>
            <h1 className="mt-4 text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white">
              <span className="text-[#fcd547]">
                Be the Face of English Lead the future
              </span>{" "}
            </h1>
            <p className="mt-4 text-base sm:text-lg text-white/90 max-w-xl">
              Zona English Ambassador - School & Campus
            </p>
            <div className="mt-6 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <button
                onClick={() => setShowModal(true)}
                className="inline-flex justify-center items-center gap-2 rounded-2xl bg-[#fcd547] px-6 py-3 text-slate-900 font-semibold shadow hover:shadow-lg transition-shadow"
              >
                Daftar Sekarang <ArrowRight size={18} />
              </button>
              <a
                href={IG_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex justify-center items-center gap-2 rounded-2xl border border-white/30 px-6 py-3 font-semibold text-white hover:border-white/50 hover:bg-white/10 transition-colors"
              >
                <Instagram size={18} /> Follow @zonaenglish.id
              </a>
              <button
                onClick={openWhatsApp}
                className="inline-flex justify-center items-center gap-2 rounded-2xl border border-green-400/30 bg-green-500/10 px-6 py-3 font-semibold text-green-300 hover:bg-green-500/20 transition-colors"
              >
                <MessageCircle size={18} /> WhatsApp
              </button>
            </div>
            <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-white/70">
              <div className="inline-flex items-center gap-2">
                <CalendarClock size={16} /> Pendaftaran 15 November s.d 15
                Desember 2025
              </div>
              <div className="inline-flex items-center gap-2">
                <MapPin size={16} /> Makassar
              </div>
              <div className="inline-flex items-center gap-2">
                <Clock size={16} /> 09.00–17.00 WITA
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative"
          >
            <div className="relative mx-auto max-w-md">
              <div className="w-full rounded-3xl bg-gradient-to-br from-sky-200 via-white to-blue-100 p-1 shadow-lg">
                <div className="w-full rounded-3xl bg-white p-5">
                  <div className="rounded-2xl overflow-hidden">
                    <img
                      src="/ambassador-photo.png"
                      alt="ZonaEnglish Ambassador - Students learning public speaking, leadership, and content creation"
                      className="w-full h-auto"
                      loading="lazy"
                    />
                  </div>
                  <div className="row-span-1 mt-4 flex items-center justify-between">
                    <div className="text-xs text-slate-500">
                      Official School Ambassador 2025
                    </div>
                    <button
                      onClick={() => setShowModal(true)}
                      className="inline-flex items-center gap-1 text-xs font-semibold text-[#03345c] hover:text-[#fcd547] transition-colors"
                    >
                      Daftar <ArrowRight size={14} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </header>

      {/* ABOUT */}
      <section
        id="about"
        className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="grid lg:grid-cols-2 gap-10 items-start"
        >
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
              Apa itu ZonaEnglish School Ambassador?
            </h2>
            <p className="mt-4 text-slate-600">
              Program resmi bagi pelajar SMP & SMA di Makassar untuk menjadi
              duta Bahasa Inggris di sekolah. Kamu akan mendapat pelatihan{" "}
              <span className="font-semibold">leadership</span>,{" "}
              <span className="font-semibold">public speaking</span>, dan
              pengalaman berharga untuk masa depan.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <div className="rounded-full bg-sky-100 text-sky-700 text-xs font-bold px-3 py-1">
                Youthful
              </div>
              <div className="rounded-full bg-indigo-100 text-indigo-700 text-xs font-bold px-3 py-1">
                Inspiratif
              </div>
              <div className="rounded-full bg-violet-100 text-violet-700 text-xs font-bold px-3 py-1">
                Kompetitif
              </div>
              <div className="rounded-full bg-emerald-100 text-emerald-700 text-xs font-bold px-3 py-1">
                Islamic-friendly
              </div>
            </div>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="font-semibold text-slate-900">Info Singkat</h3>
            <ul className="mt-4 space-y-3 text-slate-600 text-sm">
              <li className="flex items-center gap-3">
                <CalendarClock size={18} className="text-sky-700" />{" "}
                Pendaftaran: s.d.{" "}
                <span className="font-semibold">25 Oktober 2025</span>
              </li>
              <li className="flex items-center gap-3">
                <MapPin size={18} className="text-sky-700" /> Lokasi:{" "}
                <span className="font-semibold">
                  ZonaEnglish Center, Makassar - Kolaka
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Clock size={18} className="text-sky-700" /> Waktu: 09.00 –
                17.00 WITA
              </li>
              <li className="flex items-center gap-3">
                <Megaphone size={18} className="text-sky-700" /> Target: Siswa
                SMP, SMA, dan Kampus (13–25 tahun)
              </li>
            </ul>
            <button
              onClick={() => setShowModal(true)}
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-[#fcd547] px-6 py-3 text-slate-900 font-semibold shadow hover:shadow-lg transition-shadow"
            >
              Daftar Sekarang <ArrowRight size={18} />
            </button>
          </div>
        </motion.div>
      </section>

      {/* SIAPA YANG KAMI CARI */}
      <section className="bg-gradient-to-br from-[#03345c]/5 to-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-2xl sm:text-3xl font-bold text-slate-900 text-center"
          >
            🧠 Siapa yang Kami Cari (Mindset)
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-3 text-slate-600 text-center max-w-3xl mx-auto"
          >
            Tidak harus sudah mahir bahasa Inggris. Yang kami cari adalah
            pelajar yang punya keinginan besar untuk belajar dan berkembang.
          </motion.p>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.1,
                },
              },
            }}
            className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {/* Mindset Card 1 */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              className="p-6 rounded-3xl bg-gradient-to-br from-[#fcd547]/10 to-white border border-[#fcd547]/20 shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className="h-12 w-12 rounded-2xl bg-[#fcd547] text-slate-900 grid place-items-center mb-4 text-xl">
                🔥
              </div>
              <h3 className="font-bold text-slate-900 mb-2">
                Punya Tekad Kuat
              </h3>
              <p className="text-sm text-slate-600">
                Punya tekad kuat untuk bisa Bahasa Inggris dan berkomunikasi
                dengan dunia.
              </p>
            </motion.div>

            {/* Mindset Card 2 */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              className="p-6 rounded-3xl bg-gradient-to-br from-[#03345c]/5 to-white border border-[#03345c]/20 shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className="h-12 w-12 rounded-2xl bg-[#03345c] text-white grid place-items-center mb-4 text-xl">
                🌟
              </div>
              <h3 className="font-bold text-slate-900 mb-2">
                Leader Masa Depan
              </h3>
              <p className="text-sm text-slate-600">
                Ingin menjadi cerdas dan leader masa depan yang menginspirasi
                banyak orang.
              </p>
            </motion.div>

            {/* Mindset Card 3 */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              className="p-6 rounded-3xl bg-gradient-to-br from-[#fcd547]/10 to-white border border-[#fcd547]/20 shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className="h-12 w-12 rounded-2xl bg-[#fcd547] text-slate-900 grid place-items-center mb-4 text-xl">
                📚
              </div>
              <h3 className="font-bold text-slate-900 mb-2">Senang Belajar</h3>
              <p className="text-sm text-slate-600">
                Senang belajar hal baru dan berusaha melakukan yang baik &
                terbaik.
              </p>
            </motion.div>

            {/* Mindset Card 4 */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              className="p-6 rounded-3xl bg-gradient-to-br from-[#03345c]/5 to-white border border-[#03345c]/20 shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className="h-12 w-12 rounded-2xl bg-[#03345c] text-white grid place-items-center mb-4 text-xl">
                🚀
              </div>
              <h3 className="font-bold text-slate-900 mb-2">Future Ready</h3>
              <p className="text-sm text-slate-600">
                Siap mengikuti perkembangan teknologi agar tidak tertinggal
                zaman.
              </p>
            </motion.div>

            {/* Mindset Card 5 */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              className="p-6 rounded-3xl bg-gradient-to-br from-[#fcd547]/10 to-white border border-[#fcd547]/20 shadow-sm hover:shadow-md transition-all duration-300 sm:col-span-2 lg:col-span-1"
            >
              <div className="h-12 w-12 rounded-2xl bg-[#fcd547] text-slate-900 grid place-items-center mb-4 text-xl">
                🤝
              </div>
              <h3 className="font-bold text-slate-900 mb-2">Berdampak Luas</h3>
              <p className="text-sm text-slate-600">
                Ingin berdampak untuk teman, sekolah, komunitas—hingga nasional
                & internasional.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* BENEFITS */}
      <section id="benefits" className="bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-2xl sm:text-3xl font-bold text-slate-900 text-center"
          >
            Keuntungan Bergabung
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-3 text-slate-600 text-center max-w-2xl mx-auto"
          >
            Level up kemampuanmu dan jadilah inspirasi di sekolah.
          </motion.p>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.08,
                },
              },
            }}
            className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
          >
            <BenefitCard
              icon={<Award />}
              title="Sertifikat Resmi"
              desc="Gelar Youth Ambassador dari ZonaEnglish."
            />
            <BenefitCard
              icon={<Megaphone />}
              title="Pelatihan Speaking"
              desc="Coaching tampil & percaya diri."
            />
            <BenefitCard
              icon={<Gift />}
              title="Merchandise Eksklusif"
              desc="Dapatkan goodies & akses event."
            />
            <BenefitCard
              icon={<GraduationCap />}
              title="Beasiswa & Magang"
              desc="Peluang internship & scholarship."
            />
            <BenefitCard
              icon={<Star />}
              title="Exposure Media"
              desc="Kesempatan tampil di IG ZonaEnglish."
            />
            <BenefitCard
              icon={<BookOpen />}
              title="Leadership"
              desc="Belajar teamwork & project."
            />
          </motion.div>
        </div>
      </section>

      {/* PREMIUM CLASS ACCESS */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 text-center">
            🎓 Akses Gratis Premium Class Senilai Puluhan Juta Rupiah
          </h2>

          {/* Toggle Switch */}
          <div className="mt-8 flex justify-center">
            <div className="inline-flex rounded-2xl bg-slate-100 p-1">
              <button
                onClick={() => setSelectedPremiumClass("zonaenglish")}
                className={`px-6 py-3 rounded-xl font-semibold text-sm transition-all ${
                  selectedPremiumClass === "zonaenglish"
                    ? "bg-[#fcd547] text-slate-900 shadow-md"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                ZonaEnglish
              </button>
              <button
                onClick={() => setSelectedPremiumClass("hira")}
                className={`px-6 py-3 rounded-xl font-semibold text-sm transition-all ${
                  selectedPremiumClass === "hira"
                    ? "bg-[#fcd547] text-slate-900 shadow-md"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                Hira Academy
              </button>
            </div>
          </div>

          {/* Content dengan Animasi */}
          <AnimatePresence mode="wait">
            {selectedPremiumClass === "zonaenglish" ? (
              <motion.div
                key="zonaenglish"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="mt-10"
              >
                <div className="rounded-3xl border border-[#03345c]/20 bg-gradient-to-br from-[#03345c]/5 to-white p-6 sm:p-8 shadow-sm">
                  <div className="flex items-start gap-3 mb-6">
                    <div className="h-12 w-12 rounded-2xl bg-[#fcd547]/20 text-[#03345c] grid place-items-center shrink-0">
                      <GraduationCap size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-900">
                        Akses Gratis Premium Class dari ZonaEnglish
                      </h3>
                      <p className="text-sm text-slate-600 mt-1">
                        Akses penuh ke seluruh fasilitas pembelajaran premium
                        dengan nilai manfaat jutaan rupiah
                      </p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    {/* Item 1 */}
                    <div className="flex items-start gap-3 p-4 rounded-2xl bg-white border border-slate-100">
                      <div className="h-8 w-8 rounded-full bg-[#fcd547] text-slate-900 grid place-items-center shrink-0 text-sm font-bold">
                        1
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-slate-900">
                          Kelas Premium ZonaEnglish
                        </h4>
                        <p className="text-base font-bold text-slate-900 mt-1">
                          Senilai Rp 400.000/bulan
                        </p>
                        <p className="text-sm text-slate-600 mt-1">
                          Mencakup speaking, grammar, dan project class.
                        </p>
                      </div>
                    </div>

                    {/* Item 2 */}
                    <div className="flex items-start gap-3 p-4 rounded-2xl bg-white border border-slate-100">
                      <div className="h-8 w-8 rounded-full bg-[#fcd547] text-slate-900 grid place-items-center shrink-0 text-sm font-bold">
                        2
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-slate-900">
                          Akses ke Program ZE Land, ZE Camp, dan ZE Trip
                        </h4>
                        <p className="text-base font-bold text-slate-900 mt-1">
                          Hingga Rp 5.000.000 per peserta
                        </p>
                        <p className="text-sm text-slate-600 mt-1">
                          Paket pelatihan dan pengalaman belajar yang tak
                          terlupakan.
                        </p>
                      </div>
                    </div>

                    {/* Item 3 */}
                    <div className="flex items-start gap-3 p-4 rounded-2xl bg-white border border-slate-100">
                      <div className="h-8 w-8 rounded-full bg-[#fcd547] text-slate-900 grid place-items-center shrink-0 text-sm font-bold">
                        3
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-slate-900">
                          Kelas Speaking Offline & Online
                        </h4>
                        <p className="text-base font-bold text-slate-900 mt-1">
                          Senilai Rp 600.000/bulan
                        </p>
                        <p className="text-sm text-slate-600 mt-1">
                          Untuk memperkuat kemampuan komunikasi global.
                        </p>
                      </div>
                    </div>

                    {/* Item 4 */}
                    <div className="flex items-start gap-3 p-4 rounded-2xl bg-white border border-slate-100">
                      <div className="h-8 w-8 rounded-full bg-[#fcd547] text-slate-900 grid place-items-center shrink-0 text-sm font-bold">
                        4
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-slate-900">
                          Akses Event & Kompetisi Skala Regional, Nasional, dan
                          Internasional
                        </h4>
                        <p className="text-base font-bold text-slate-900 mt-1">
                          Hingga Rp 20.000.000 per tahun
                        </p>
                        <p className="text-sm text-slate-600 mt-1">
                          Ambassador berkesempatan di pilih jadi duta Zona
                          English untuk mengikuti event, workshop, dan lomba di
                          berbagai level. Setiap partisipasi disertai dengan
                          sertifikat resmi dari penyelenggara, ZonaEnglish, dan
                          Hira Academy. Proses seleksi di pilih oleh tim
                          internal Zona English.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="hira"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="mt-10"
              >
                <div className="rounded-3xl border border-indigo-200 bg-gradient-to-br from-indigo-50 to-white p-6 sm:p-8 shadow-sm">
                  <div className="flex items-start gap-3 mb-6">
                    <div className="h-12 w-12 rounded-2xl bg-indigo-100 text-indigo-700 grid place-items-center shrink-0">
                      <GraduationCap size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-900">
                        Akses Gratis Premium Class dari Hira Academy
                      </h3>
                      <p className="text-sm text-slate-600 mt-1">
                        Kelas eksklusif di Hira Space dengan fokus pengembangan
                        kecerdasan, kreativitas, dan kepemimpinan masa depan
                      </p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    {/* Item 1 */}
                    <div className="flex items-start gap-3 p-4 rounded-2xl bg-white border border-slate-100">
                      <div className="h-8 w-8 rounded-full bg-indigo-600 text-white grid place-items-center shrink-0 text-sm font-bold">
                        1
                      </div>
                      <div className="flex-1">
                        <div className="flex items-start justify-between gap-2 flex-wrap">
                          <h4 className="font-semibold text-slate-900">
                            🤖 AI Knowledge for Teens
                          </h4>
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-lg bg-indigo-100 text-indigo-700 text-xs font-bold whitespace-nowrap">
                            💰 Rp 750.000
                          </span>
                        </div>
                        <p className="text-sm text-slate-600 mt-1">
                          Belajar memanfaatkan AI & ChatGPT untuk belajar lebih
                          efektif, cepat, dan produktif di dunia digital.
                        </p>
                      </div>
                    </div>

                    {/* Item 2 */}
                    <div className="flex items-start gap-3 p-4 rounded-2xl bg-white border border-slate-100">
                      <div className="h-8 w-8 rounded-full bg-indigo-600 text-white grid place-items-center shrink-0 text-sm font-bold">
                        2
                      </div>
                      <div className="flex-1">
                        <div className="flex items-start justify-between gap-2 flex-wrap">
                          <h4 className="font-semibold text-slate-900">
                            🎨 Creative Skill with Canva
                          </h4>
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-lg bg-indigo-100 text-indigo-700 text-xs font-bold whitespace-nowrap">
                            💰 Rp 600.000
                          </span>
                        </div>
                        <p className="text-sm text-slate-600 mt-1">
                          Desain presentasi, poster, dan konten profesional
                          menggunakan Design Thinking.
                        </p>
                      </div>
                    </div>

                    {/* Item 3 */}
                    <div className="flex items-start gap-3 p-4 rounded-2xl bg-white border border-slate-100">
                      <div className="h-8 w-8 rounded-full bg-indigo-600 text-white grid place-items-center shrink-0 text-sm font-bold">
                        3
                      </div>
                      <div className="flex-1">
                        <div className="flex items-start justify-between gap-2 flex-wrap">
                          <h4 className="font-semibold text-slate-900">
                            � Public Speaking & Leadership
                          </h4>
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-lg bg-indigo-100 text-indigo-700 text-xs font-bold whitespace-nowrap">
                            💰 Rp 650.000
                          </span>
                        </div>
                        <p className="text-sm text-slate-600 mt-1">
                          Berani tampil di depan umum, menyampaikan ide kuat,
                          dan memimpin tim kecil dengan percaya diri.
                        </p>
                      </div>
                    </div>

                    {/* Item 4 */}
                    <div className="flex items-start gap-3 p-4 rounded-2xl bg-white border border-slate-100">
                      <div className="h-8 w-8 rounded-full bg-indigo-600 text-white grid place-items-center shrink-0 text-sm font-bold">
                        4
                      </div>
                      <div className="flex-1">
                        <div className="flex items-start justify-between gap-2 flex-wrap">
                          <h4 className="font-semibold text-slate-900">
                            💼 Entrepreneur Mindset
                          </h4>
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-lg bg-indigo-100 text-indigo-700 text-xs font-bold whitespace-nowrap">
                            💰 Rp 500.000
                          </span>
                        </div>
                        <p className="text-sm text-slate-600 mt-1">
                          Bangun proyek mini, belajar problem-solving nyata, dan
                          memahami dasar wirausaha sejak remaja.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* TUGAS UTAMA AMBASSADOR */}
      <section className="bg-gradient-to-br from-[#03345c]/5 to-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 text-center">
            🧭 Tugas Utama Ambassador
          </h2>
          <p className="mt-3 text-slate-600 text-center max-w-3xl mx-auto">
            Sebagai Ambassador ZonaEnglish, kamu akan menjalankan misi penting
            untuk membangun komunitas pembelajar bahasa Inggris di
            sekolah/kampusmu.
          </p>

          <div className="mt-10 grid md:grid-cols-2 gap-6">
            {/* Task Card 1 */}
            <div className="p-6 rounded-3xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="h-12 w-12 rounded-2xl bg-[#fcd547] text-slate-900 grid place-items-center shrink-0 text-xl">
                  📣
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 mb-2">
                    Edukasi & Inspirasi
                  </h3>
                  <p className="text-sm text-slate-600">
                    Edukasi pentingnya Bahasa Inggris & Future Skills untuk masa
                    depan yang lebih cerah.
                  </p>
                </div>
              </div>
            </div>

            {/* Task Card 2 */}
            <div className="p-6 rounded-3xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="h-12 w-12 rounded-2xl bg-[#03345c] text-white grid place-items-center shrink-0 text-xl">
                  💬
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 mb-2">
                    Brand Ambassador
                  </h3>
                  <p className="text-sm text-slate-600">
                    Perkenalkan ZonaEnglish & Hira Academy di sekolah/kampus
                    sebagai solusi belajar terbaik.
                  </p>
                </div>
              </div>
            </div>

            {/* Task Card 3 */}
            <div className="p-6 rounded-3xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="h-12 w-12 rounded-2xl bg-[#fcd547] text-slate-900 grid place-items-center shrink-0 text-xl">
                  🎟️
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 mb-2">
                    Referral Program
                  </h3>
                  <p className="text-sm text-slate-600">
                    Bagikan referral code — teman dapat voucher, kamu dapat
                    reward menarik.
                  </p>
                </div>
              </div>
            </div>

            {/* Task Card 4 */}
            <div className="p-6 rounded-3xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="h-12 w-12 rounded-2xl bg-[#03345c] text-white grid place-items-center shrink-0 text-xl">
                  🎥
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 mb-2">
                    Content Creator
                  </h3>
                  <p className="text-sm text-slate-600">
                    Buat konten/aktivitas sederhana di sekolah untuk
                    IG/TikTok/Mading.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PENGUMUMAN UTAMA */}
      <section className="bg-gradient-to-br from-[#03345c]/5 to-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 text-center">
            📢 Pengumuman Utama
          </h2>
          <p className="mt-3 text-slate-600 text-center max-w-3xl mx-auto">
            Jadilah Ambassador ZonaEnglish di sekolah/kampusmu. Setiap
            sekolah/kampus akan di pilih 1–3 Ambassador.
          </p>

          <div className="mt-10 grid md:grid-cols-2 gap-6">
            {/* Left Column */}
            <div className="space-y-4">
              <div className="flex items-start gap-3 p-4 rounded-2xl bg-white border border-slate-100 shadow-sm">
                <div className="h-8 w-8 rounded-full bg-[#fcd547] text-slate-900 grid place-items-center shrink-0 text-sm font-bold">
                  ✓
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-slate-900">
                    1–3 Ambassador per sekolah/kampus
                  </h4>
                  <p className="text-sm text-slate-600 mt-1">
                    Setiap sekolah/kampus akan dipilih kandidat terbaik sebagai
                    perwakilan resmi ZonaEnglish
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 rounded-2xl bg-white border border-slate-100 shadow-sm">
                <div className="h-8 w-8 rounded-full bg-[#fcd547] text-slate-900 grid place-items-center shrink-0 text-sm font-bold">
                  ⭐
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-slate-900">
                    Program resmi ZonaEnglish
                  </h4>
                  <p className="text-sm text-slate-600 mt-1">
                    Sertifikat dan pengakuan resmi dari ZonaEnglish dan partner
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-4">
              <div className="flex items-start gap-3 p-4 rounded-2xl bg-white border border-slate-100 shadow-sm">
                <div className="h-8 w-8 rounded-full bg-[#fcd547] text-slate-900 grid place-items-center shrink-0 text-sm font-bold">
                  📅
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-slate-900">
                    Timeline Program
                  </h4>
                  <p className="text-sm text-slate-600 mt-1">
                    Pendaftaran dibuka hingga 15 Desember 2025. Segera daftar!
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 rounded-2xl bg-white border border-slate-100 shadow-sm">
                <div className="h-8 w-8 rounded-full bg-[#fcd547] text-slate-900 grid place-items-center shrink-0 text-sm font-bold">
                  💬
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-slate-900">
                    Butuh bantuan?
                  </h4>
                  <p className="text-sm text-slate-600 mt-1">
                    Hubungi kami via WhatsApp atau Instagram untuk info lebih
                    lanjut
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SIAPA YANG BISA DAFTAR */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 text-center">
            🎯 Siapa yang Bisa Daftar?
          </h2>
          <p className="mt-3 text-slate-600 text-center max-w-3xl mx-auto">
            Program Ambassador ZonaEnglish terbuka untuk semua pelajar di
            Makassar yang ingin berkembang!
          </p>

          <div className="mt-10 grid md:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="p-6 rounded-3xl bg-gradient-to-br from-[#fcd547]/10 to-white border border-[#fcd547]/20 shadow-sm hover:shadow-md transition-all duration-300">
              <div className="flex flex-col items-center text-center">
                <div className="h-16 w-16 rounded-2xl bg-[#fcd547] text-slate-900 grid place-items-center text-3xl mb-4">
                  🎓
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  Siswa SMP & SMA
                </h3>
                <p className="text-slate-600">
                  Pelajar aktif dari SMP/SMA di wilayah Makassar usia 13-17
                  tahun
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="p-6 rounded-3xl bg-gradient-to-br from-[#03345c]/5 to-white border border-[#03345c]/20 shadow-sm hover:shadow-md transition-all duration-300">
              <div className="flex flex-col items-center text-center">
                <div className="h-16 w-16 rounded-2xl bg-[#03345c] text-white grid place-items-center text-3xl mb-4">
                  🏛️
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  Mahasiswa
                </h3>
                <p className="text-slate-600">
                  Mahasiswa aktif dari berbagai kampus di Makassar usia 18-25
                  tahun
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="p-6 rounded-3xl bg-gradient-to-br from-[#fcd547]/10 to-white border border-[#fcd547]/20 shadow-sm hover:shadow-md transition-all duration-300">
              <div className="flex flex-col items-center text-center">
                <div className="h-16 w-16 rounded-2xl bg-[#fcd547] text-slate-900 grid place-items-center text-3xl mb-4">
                  🌟
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  Semua Sekolah/Kampus
                </h3>
                <p className="text-slate-600">
                  Terbuka untuk semua institusi pendidikan di Makassar tanpa
                  terkecuali
                </p>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="mt-10 text-center">
            <button
              onClick={() => setShowModal(true)}
              className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-[#fcd547] text-slate-900 font-semibold hover:shadow-lg transition-all duration-300 shadow-md"
            >
              <span>Daftar Sekarang</span>
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </section>

      {/* APPLY STEPS */}
      <section
        id="apply"
        className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16"
      >
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-2xl sm:text-3xl font-bold text-slate-900 text-center"
        >
          Syarat & Cara Daftar
        </motion.h2>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
          className="mt-10 max-w-5xl mx-auto"
        >
          <ol className="grid md:grid-cols-2 gap-6">
            <Step n={1} title="Siswa aktif SMP/SMA/Mahasiswa di Makassar" />
            <Step
              n={2}
              title="Klik tombol 'Daftar Sekarang' dan isi formulir"
            />
            <Step
              n={3}
              title="Upload video: 'Why I Love Learning English' (maks. 60 detik)"
            />
            <Step n={4} title="Tunggu undangan Interview Day" />
          </ol>
          <div className="mt-10 text-center">
            <button
              onClick={() => setShowModal(true)}
              className="inline-flex items-center justify-center gap-2 rounded-2xl bg-[#fcd547] px-8 py-4 text-slate-900 font-semibold shadow-lg hover:shadow-xl transition-shadow"
            >
              Daftar Sekarang <ArrowRight size={18} />
            </button>
          </div>
        </motion.div>
      </section>

      {/* TESTIMONIALS */}
      <section id="testi" className="bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 text-center">
            Kata Mereka
          </h2>
          <div className="mt-10 grid md:grid-cols-2 gap-6">
            <TestiCard
              name="Alya"
              school="SMA 5 Makassar"
              text="Gabung di ZonaEnglish bikin aku lebih percaya diri ngomong Inggris dan berani tampil di depan umum!"
            />
            <TestiCard
              name="Rizky"
              school="SMP 2 Makassar"
              text="Aku belajar bukan cuma grammar, tapi juga leadership dan teamwork."
            />
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section id="faq" className="bg-sky-50/60">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 text-center">
            Pertanyaan yang Sering Ditanyakan
          </h2>
          <p className="mt-3 text-slate-600 text-center max-w-2xl mx-auto">
            Ada pertanyaan? Cek dulu FAQ-nya, siapa tau jawabannya udah ada di
            sini!
          </p>

          <div className="mt-10 space-y-4">
            {/* FAQ-KE-1 */}
            <FAQItem
              question="Apa sih yang bakal aku dapetin kalau jadi Ambassador?"
              answer="Kamu bakal dapat sertifikat resmi Youth Ambassador, pelatihan public speaking & leadership, merchandise eksklusif, peluang beasiswa dan magang, plus kesempatan tampil di Instagram ZonaEnglish! Keren kan?"
            />

            {/* FAQ-KE-2 */}
            <FAQItem
              question="Aku pemula banget di bahasa Inggris, boleh ikut nggak?"
              answer="Tentu boleh! Program ini justru dirancang buat kamu yang mau berkembang. Yang penting kamu punya semangat belajar dan berani tampil. Kami akan support kamu dari awal!"
            />

            {/* FAQ-KE-3 */}
            <FAQItem
              question="Kalau jadwalnya bentrok sama sekolah gimana?"
              answer="Tenang, kegiatan program ini fleksibel dan biasanya di luar jam sekolah (weekend atau sore hari). Kami paham kamu masih sekolah, jadi jadwalnya disesuaikan kok!"
            />

            {/* FAQ-KE-4 */}
            <FAQItem
              question="Apa aku harus bayar untuk ikut program ini?"
              answer="Program Ambassador ini GRATIS! Kamu justru bakal dapat banyak benefit seperti sertifikat, merchandise, dan pelatihan tanpa biaya sepeserpun. Investasi terbaik buat masa depanmu!"
            />

            {/* FAQ-KE-5 */}
            <FAQItem
              question="Setelah daftar, prosesnya gimana?"
              answer="Setelah daftar, kamu akan dapat undangan untuk Interview Day. Di sana kamu kenalan sama tim dan peserta lain! Santai aja, ini bukan interview formal kok, lebih ke casual chat."
            />

            {/* FAQ-KE-6 */}
            <FAQItem
              question="Kalau dari luar Makassar bisa ikut nggak?"
              answer="Khusus untuk luar makassar, bisa juga kok, tapi melalui daring/online yah"
            />
          </div>

          <div className="mt-10 text-center">
            <p className="text-slate-600 mb-4">Masih ada pertanyaan lain?</p>
            <button
              onClick={openWhatsApp}
              className="inline-flex items-center gap-2 rounded-2xl border border-green-200 bg-green-50 px-6 py-3 font-semibold text-green-700 hover:bg-green-100"
            >
              <MessageCircle size={18} /> Tanya via WhatsApp
            </button>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-slate-100 bg-gradient-to-b from-white to-sky-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 grid md:grid-cols-2 gap-6 items-center">
          <div>
            <p className="font-semibold text-slate-900">
              ZonaEnglish Center — Hira Space, Makassar
            </p>
            <p className="text-sm text-slate-600 mt-1">
              "You don't have to be perfect to start — you just have to start
              speaking."
            </p>
          </div>
          <div className="flex md:justify-end gap-3">
            <button
              onClick={() => setShowModal(true)}
              className="inline-flex items-center gap-2 rounded-2xl bg-[#fcd547] px-5 py-2.5 text-slate-900 font-semibold shadow hover:shadow-lg transition-shadow"
            >
              Daftar Sekarang <ArrowRight size={18} />
            </button>
          </div>
        </div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-8 text-xs text-slate-500">
          © {new Date().getFullYear()} ZonaEnglish. All rights reserved.
        </div>
      </footer>

      {/* FLOATING REGISTRATION MENU */}
      <div className="fixed bottom-6 right-6 z-50">
        {/* Menu Options */}
        <AnimatePresence>
          {showFloatingMenu && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="absolute bottom-20 right-0 flex flex-col gap-3 mb-2"
            >
              {/* Daftar Ambassador SMP */}
              <motion.button
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ delay: 0.1 }}
                onClick={() => {
                  setShowModal(true);
                  setShowFloatingMenu(false);
                }}
                className="group flex items-center gap-3 bg-white hover:bg-sky-50 text-slate-900 px-4 py-3 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 whitespace-nowrap"
              >
                <div className="h-10 w-10 rounded-xl bg-sky-500 text-white grid place-items-center shrink-0 group-hover:scale-110 transition-transform">
                  🎓
                </div>
                <div className="text-left">
                  <p className="font-bold text-sm">Ambassador SMP</p>
                  <p className="text-xs text-slate-600">Usia 13-15 tahun</p>
                </div>
              </motion.button>

              {/* Daftar Ambassador SMA */}
              <motion.button
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ delay: 0.15 }}
                onClick={() => {
                  setShowModal(true);
                  setShowFloatingMenu(false);
                }}
                className="group flex items-center gap-3 bg-white hover:bg-indigo-50 text-slate-900 px-4 py-3 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 whitespace-nowrap"
              >
                <div className="h-10 w-10 rounded-xl bg-indigo-500 text-white grid place-items-center shrink-0 group-hover:scale-110 transition-transform">
                  🏛️
                </div>
                <div className="text-left">
                  <p className="font-bold text-sm">Ambassador SMA</p>
                  <p className="text-xs text-slate-600">Usia 16-18 tahun</p>
                </div>
              </motion.button>

              {/* Daftar Ambassador Mahasiswa */}
              <motion.button
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ delay: 0.2 }}
                onClick={() => {
                  setShowModal(true);
                  setShowFloatingMenu(false);
                }}
                className="group flex items-center gap-3 bg-white hover:bg-violet-50 text-slate-900 px-4 py-3 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 whitespace-nowrap"
              >
                <div className="h-10 w-10 rounded-xl bg-violet-500 text-white grid place-items-center shrink-0 group-hover:scale-110 transition-transform">
                  🎓
                </div>
                <div className="text-left">
                  <p className="font-bold text-sm">Ambassador Mahasiswa</p>
                  <p className="text-xs text-slate-600">Usia 19-25 tahun</p>
                </div>
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Main Toggle Button */}
        <motion.button
          onClick={() => setShowFloatingMenu(!showFloatingMenu)}
          animate={{ rotate: showFloatingMenu ? 45 : 0 }}
          className="h-16 w-16 rounded-full bg-gradient-to-br from-[#fcd547] to-[#03345c] text-white shadow-2xl hover:shadow-3xl flex items-center justify-center transition-all duration-300 hover:scale-110"
          aria-label="Pilih Jenis Pendaftaran Ambassador"
        >
          {showFloatingMenu ? (
            <X size={28} className="font-bold" />
          ) : (
            <div className="flex flex-col items-center">
              <ArrowRight size={24} className="-rotate-45" />
              <span className="text-[10px] font-bold mt-0.5">DAFTAR</span>
            </div>
          )}
        </motion.button>
      </div>

      {/* MODAL FORM */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
            onClick={() => setShowModal(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-3xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="sticky top-0 bg-white border-b border-slate-200 px-6 py-4 flex items-center justify-between rounded-t-3xl">
                <h3 className="text-xl font-bold text-slate-900">
                  Pendaftaran Ambassador 2025
                </h3>
                <button
                  onClick={() => setShowModal(false)}
                  className="h-8 w-8 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center"
                >
                  <X size={20} />
                </button>
              </div>

              <form onSubmit={handleSubmit} className="p-6 space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Nama Lengkap <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="nama"
                    value={formData.nama}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-2xl border border-slate-200 focus:border-sky-500 focus:ring-2 focus:ring-sky-200 outline-none transition"
                    placeholder="Masukkan nama lengkap"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Alamat <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="alamat"
                    value={formData.alamat}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-2xl border border-slate-200 focus:border-sky-500 focus:ring-2 focus:ring-sky-200 outline-none transition"
                    placeholder="Masukkan alamat lengkap"
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                      Usia <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="number"
                      name="usia"
                      value={formData.usia}
                      onChange={handleInputChange}
                      required
                      min="13"
                      max="17"
                      className="w-full px-4 py-3 rounded-2xl border border-slate-200 focus:border-sky-500 focus:ring-2 focus:ring-sky-200 outline-none transition"
                      placeholder="13-17 tahun"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                      Jenis Kelamin <span className="text-red-500">*</span>
                    </label>
                    <select
                      name="jenisKelamin"
                      value={formData.jenisKelamin}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-2xl border border-slate-200 focus:border-sky-500 focus:ring-2 focus:ring-sky-200 outline-none transition"
                    >
                      <option value="">Pilih</option>
                      <option value="Laki-laki">Laki-laki</option>
                      <option value="Perempuan">Perempuan</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Sekolah <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="sekolah"
                    value={formData.sekolah}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-2xl border border-slate-200 focus:border-sky-500 focus:ring-2 focus:ring-sky-200 outline-none transition"
                    placeholder="Contoh: SMA Negeri 1 Makassar"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Akun Instagram <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500">
                      @
                    </span>
                    <input
                      type="text"
                      name="instagram"
                      value={formData.instagram}
                      onChange={handleInputChange}
                      required
                      className="w-full pl-8 pr-4 py-3 rounded-2xl border border-slate-200 focus:border-sky-500 focus:ring-2 focus:ring-sky-200 outline-none transition"
                      placeholder="username"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Alasan Ingin Bergabung{" "}
                    <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    name="alasan"
                    value={formData.alasan}
                    onChange={handleInputChange}
                    required
                    rows={4}
                    className="w-full px-4 py-3 rounded-2xl border border-slate-200 focus:border-sky-500 focus:ring-2 focus:ring-sky-200 outline-none transition resize-none"
                    placeholder="Ceritakan mengapa kamu ingin menjadi ZonaEnglish School Ambassador..."
                  />
                </div>

                <div className="pt-4 flex gap-3">
                  <button
                    type="button"
                    onClick={() => setShowModal(false)}
                    className="flex-1 px-6 py-3 rounded-2xl border border-slate-200 font-semibold text-slate-700 hover:bg-slate-50"
                  >
                    Batal
                  </button>
                  <button
                    type="submit"
                    className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3 rounded-2xl bg-[#fcd547] font-semibold text-slate-900 shadow hover:shadow-lg transition-shadow"
                  >
                    <MessageCircle size={18} />
                    Kirim ke WhatsApp
                  </button>
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function BenefitCard({
  icon,
  title,
  desc,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
}) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
      }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow"
    >
      <div className="h-10 w-10 rounded-2xl bg-[#fcd547]/20 text-[#03345c] grid place-items-center">
        {icon}
      </div>
      <h3 className="mt-4 font-semibold text-slate-900">{title}</h3>
      <p className="text-sm text-slate-600 mt-1">{desc}</p>
    </motion.div>
  );
}

function Step({ n, title }: { n: number; title: string }) {
  return (
    <motion.li
      variants={{
        hidden: { opacity: 0, x: -20 },
        visible: { opacity: 1, x: 0 },
      }}
      className="flex items-start gap-4"
    >
      <div className="mt-1 h-8 w-8 shrink-0 rounded-full bg-[#fcd547] text-slate-900 grid place-items-center font-bold">
        {n}
      </div>
      <p className="text-slate-700">{title}</p>
    </motion.li>
  );
}

function TestiCard({
  name,
  school,
  text,
}: {
  name: string;
  school: string;
  text: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
    >
      <div className="flex items-center gap-3">
        <div className="h-10 w-10 rounded-full bg-sky-200" />
        <div>
          <p className="font-semibold text-slate-900">{name}</p>
          <p className="text-xs text-slate-500">{school}</p>
        </div>
      </div>
      <p className="mt-3 text-slate-700 text-sm">"{text}"</p>
    </motion.div>
  );
}

// FAQ Item Component with Accordion
function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="rounded-3xl border border-slate-200 bg-white shadow-sm overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-slate-50 transition-colors"
      >
        <h3 className="font-semibold text-slate-900 pr-4">{question}</h3>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="shrink-0"
        >
          <ChevronDown size={20} className="text-sky-700" />
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="px-6 pb-5 text-slate-600 text-sm leading-relaxed">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
