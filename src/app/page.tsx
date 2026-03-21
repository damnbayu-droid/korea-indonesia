"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import {
  Globe,
  Plane,
  Building2,
  Laptop,
  Users,
  FileText,
  Clock,
  CheckCircle,
  Mail,
  Phone,
  MapPin,
  Instagram,
  Send,
  ChevronRight,
  Palmtree,
  Waves,
  Mountain,
  Utensils,
  Camera,
  Heart,
  Briefcase,
  TrendingUp,
  Shield,
  MessageCircle,
  Umbrella,
} from "lucide-react";

// Translation data
const translations = {
  ko: {
    // Header
    header: {
      logo: "인도네시아 비자",
      tagline: "한국인을 위한 전문 비자 서비스",
      languageSwitch: "English",
    },
    // Hero Section
    hero: {
      title: "한국인을 위한 인도네시아 비자 서비스",
      subtitle: "발리 여행, 원격 근무, 비즈니스 기회 - 인도네시아에서의 모든 것을 전문적으로 도와드립니다",
      cta: {
        tourist: "관광 비자",
        business: "비즈니스 비자",
        digitalNomad: "디지털 노마드 비자",
        allOptions: "모든 비자 옵션",
      },
    },
    // Why Bali Section
    whyBali: {
      title: "왜 한국인 여행객들에게 발리가 인기일까요?",
      subtitle: "매년 수만 명의 한국인이 발리를 선택하는 이유",
      features: [
        {
          title: "허니문 여행지",
          description: "세계적인 신혼부부 여행지로 사랑받는 발리의 낭만적인 리조트와 빌라",
        },
        {
          title: "해변 리조트",
          description: "크리스탈 같은 맑은 바다와 백사장이 있는 최고급 해변 리조트",
        },
        {
          title: "럭셔리 빌라",
          description: "프라이빗 풀이 있는 고급 빌라에서 누리는 특별한 휴가",
        },
        {
          title: "인스타 감성 명소",
          description: "SNS에서 인기 있는 포토스팟과 액티비티가 가득한 여행지",
        },
      ],
    },
    // Visa Options Section
    visaOptions: {
      title: "한국인을 위한 인도네시아 비자 옵션",
      subtitle: "여행 목적에 맞는 비자를 선택하세요",
      apply: "신청하기",
      viewAll: "모든 비자 서비스 보기",
      visas: [
        {
          name: "B1 VOA / 연장",
          description: "도착 비자 온라인 신청 및 연장 서비스",
          url: "https://indonesianvisas.com/en/services/B1",
        },
        {
          name: "C1 방문 비자",
          description: "단기 방문을 위한 비자 서비스",
          url: "https://indonesianvisas.com/en/services/C1",
        },
        {
          name: "C2 비즈니스 비자",
          description: "비즈니스 활동을 위한 비자",
          url: "https://indonesianvisas.com/en/services/C2",
        },
        {
          name: "C12 사전 투자",
          description: "투자 조사 및 사전 준비 비자",
          url: "https://indonesianvisas.com/en/services/C12",
        },
        {
          name: "D1 관광 비자",
          description: "관광 목적의 장기 체류 비자",
          url: "https://indonesianvisas.com/en/services/D1",
        },
        {
          name: "D2 비즈니스 비자",
          description: "장기 비즈니스 활동 비자",
          url: "https://indonesianvisas.com/en/services/D2",
        },
        {
          name: "D12 사전 투자",
          description: "장기 투자 조사 비자",
          url: "https://indonesianvisas.com/en/services/D12",
        },
        {
          name: "E33G 디지털 노마드",
          description: "원격 근무자를 위한 특별 비자",
          url: "https://indonesianvisas.com/en/services/E33G",
        },
        {
          name: "E28A 투자 KITAS",
          description: "투자자를 위한 체류 허가증",
          url: "https://indonesianvisas.com/en/services/E28A",
        },
      ],
    },
    // Tourist Visa Section
    touristVisa: {
      title: "한국인을 위한 발리 관광 비자",
      subtitle: "인도네시아의 아름다움을 경험하세요",
      experiences: [
        { title: "서핑", description: "세계적인 서핑 명소에서 즐기는 파도타기" },
        { title: "럭셔리 리조트", description: "최고급 시설과 서비스를 갖춘 리조트" },
        { title: "문화 사원", description: "발리 힌두교 사원과 전통 문화 체험" },
        { title: "열대 해변", description: "에메랄드빛 바다와 황금빛 모래사장" },
      ],
      cta: "관광 비자 신청하기",
    },
    // Digital Nomad Section
    digitalNomad: {
      title: "한국인 원격 근무자를 위한 디지털 노마드 비자",
      subtitle: "발리에서 일하고, 살고, 즐기세요",
      features: [
        { title: "코워킹 스페이스", description: "최신 시설을 갖춘 공유 오피스" },
        { title: "창작 커뮤니티", description: "전 세계 디지털 노마드들과의 네트워킹" },
        { title: "합리적인 생활비", description: "한국 대비 저렴한 생활 비용" },
      ],
      cta: "디지털 노마드 비자 신청하기",
    },
    // Business Section
    business: {
      title: "한국-인도네시아 비즈니스 기회",
      subtitle: "성장하는 경제 협력의 중심에서 기회를 잡으세요",
      opportunities: [
        { title: "무역 협력", description: "한-인도네시아 자유무역협정 활용" },
        { title: "스타트업 확장", description: "동남아시아 시장 진출의 교두보" },
        { title: "관광 산업 파트너십", description: "관광 및 서비스 분야 협력 기회" },
      ],
      cta: "비즈니스 비자 신청하기",
    },
    // Investment Section
    investment: {
      title: "인도네시아 투자 기회",
      subtitle: "한국 투자자들을 위한 유망 분야",
      sectors: [
        { title: "관광 산업", description: "성장하는 발리 관광 시장" },
        { title: "리조트 & 호스피탈리티", description: "호텔 및 리조트 개발 투자" },
        { title: "테크 스타트업", description: "디지털 경제 성장 기회" },
        { title: "인프라 프로젝트", description: "정부 주도 개발 사업 참여" },
      ],
      cta: "투자 KITAS 신청하기",
    },
    // Why Choose Us Section
    whyChooseUs: {
      title: "왜 우리 비자 대행사를 선택해야 할까요?",
      subtitle: "전문성과 신뢰로 고객을 모십니다",
      advantages: [
        { title: "전문 비자 상담", description: "경험 많은 컨설턴트가 1:1 맞춤 상담" },
        { title: "서류 지원", description: "복잡한 서류 준비 대행" },
        { title: "빠른 처리", description: "신속하고 정확한 비자 발급" },
        { title: "현지 이민국 전문성", description: "인도네시아 이민법 정통" },
      ],
    },
    // Application Process Section
    applicationProcess: {
      title: "인도네시아 비자 신청 절차",
      subtitle: "간단한 4단계로 비자를 받으세요",
      steps: [
        { step: "1", title: "문의 제출", description: "온라인 또는 전화로 비자 문의" },
        { step: "2", title: "서류 제출", description: "필요 서류 준비 및 제출" },
        { step: "3", title: "비자 처리", description: "전문가가 대신 처리 진행" },
        { step: "4", title: "비자 승인", description: "승인된 비자 수령" },
      ],
    },
    // FAQ Section
    faq: {
      title: "자주 묻는 질문",
      subtitle: "궁금한 점을 해결해 드립니다",
      questions: [
        {
          question: "한국인은 인도네시아 비자가 필요한가요?",
          answer: "네, 한국 여권 소지자도 인도네시아 입국을 위해서는 적절한 비자가 필요합니다. 도착 비자(VOA) 또는 사전 신청 비자 중 선택할 수 있습니다.",
        },
        {
          question: "비자 처리는 얼마나 걸리나요?",
          answer: "비자 종류에 따라 다르지만, 일반적으로 3-7 영업일이 소요됩니다. 긴급 처리 옵션도 available합니다.",
        },
        {
          question: "한국인 관광객도 체류 기간을 연장할 수 있나요?",
          answer: "네, VOA는 1회 연장이 가능하며 총 60일까지 체류할 수 있습니다. 다른 비자 종류도 연장 옵션이 있습니다.",
        },
        {
          question: "발리는 원격 근무에 좋은 곳인가요?",
          answer: "네, 발리는 전 세계 디지털 노마드들에게 인기 있는 목적지입니다. 좋은 인프라, 아름다운 환경, 저렴한 생활비가 장점입니다.",
        },
      ],
    },
    // Contact Section
    contact: {
      title: "연락처",
      subtitle: "언제든지 문의해 주세요",
      email: "이메일",
      whatsapp: "WhatsApp",
      address: "주소",
      instagram: "Instagram",
      telegram: "Telegram",
      viewMap: "지도 보기",
      openChat: "채팅 시작",
    },
    // Inquiry Form
    inquiryForm: {
      title: "인도네시아 비자 문의",
      name: "이름",
      email: "이메일",
      nationality: "국적",
      visaType: "비자 종류",
      message: "문의 내용",
      submit: "문의 보내기",
      selectVisa: "비자를 선택하세요",
      selectNationality: "국적을 선택하세요",
      visaTypes: [
        "B1 VOA / 연장",
        "C1 방문 비자",
        "C2 비즈니스 비자",
        "C12 사전 투자",
        "D1 관광 비자",
        "D2 비즈니스 비자",
        "D12 사전 투자",
        "E33G 디지털 노마드",
        "E28A 투자 KITAS",
        "기타",
      ],
    },
    // Footer
    footer: {
      description: "한국인을 위한 전문 인도네시아 비자 서비스. 발리 여행, 비즈니스, 투자, 디지털 노마드를 위한 맞춤형 비자 솔루션을 제공합니다.",
      quickLinks: "빠른 링크",
      contactUs: "연락처",
      copyright: "© 2024 southkoreaindonesianvisa.online. All rights reserved.",
      links: [
        { name: "관광 비자", url: "https://indonesianvisas.com/en/services/D1" },
        { name: "비즈니스 비자", url: "https://indonesianvisas.com/en/services/C2" },
        { name: "디지털 노마드 비자", url: "https://indonesianvisas.com/en/services/E33G" },
        { name: "투자 KITAS", url: "https://indonesianvisas.com/en/services/E28A" },
      ],
    },
  },
  en: {
    // Header
    header: {
      logo: "Indonesia Visa",
      tagline: "Professional Visa Services for Koreans",
      languageSwitch: "한국어",
    },
    // Hero Section
    hero: {
      title: "Indonesia Visa Services for South Korean Citizens",
      subtitle: "Travel to Bali, work remotely, or explore business opportunities in Indonesia with our professional assistance",
      cta: {
        tourist: "Tourist Visa",
        business: "Business Visa",
        digitalNomad: "Digital Nomad Visa",
        allOptions: "All Visa Options",
      },
    },
    // Why Bali Section
    whyBali: {
      title: "Why is Bali Popular Among Korean Travelers?",
      subtitle: "Why tens of thousands of Koreans choose Bali every year",
      features: [
        {
          title: "Honeymoon Destination",
          description: "Romantic resorts and villas in one of the world's favorite honeymoon destinations",
        },
        {
          title: "Beach Resorts",
          description: "Premium beach resorts with crystal clear waters and white sandy beaches",
        },
        {
          title: "Luxury Villas",
          description: "Special vacations in private pool villas",
        },
        {
          title: "Instagrammable Spots",
          description: "Popular photo spots and activities trending on social media",
        },
      ],
    },
    // Visa Options Section
    visaOptions: {
      title: "Indonesia Visa Options for Korean Citizens",
      subtitle: "Choose the visa that fits your travel purpose",
      apply: "Apply Now",
      viewAll: "View All Visa Services",
      visas: [
        {
          name: "B1 VOA / Extension",
          description: "Visa on Arrival online application and extension service",
          url: "https://indonesianvisas.com/en/services/B1",
        },
        {
          name: "C1 Visit Visa",
          description: "Visa service for short-term visits",
          url: "https://indonesianvisas.com/en/services/C1",
        },
        {
          name: "C2 Business Visa",
          description: "Visa for business activities",
          url: "https://indonesianvisas.com/en/services/C2",
        },
        {
          name: "C12 Pre Investment",
          description: "Visa for investment research and preparation",
          url: "https://indonesianvisas.com/en/services/C12",
        },
        {
          name: "D1 Tourist Visa",
          description: "Long-stay visa for tourism purposes",
          url: "https://indonesianvisas.com/en/services/D1",
        },
        {
          name: "D2 Business Visa",
          description: "Long-term business activity visa",
          url: "https://indonesianvisas.com/en/services/D2",
        },
        {
          name: "D12 Pre Investment",
          description: "Long-term investment research visa",
          url: "https://indonesianvisas.com/en/services/D12",
        },
        {
          name: "E33G Digital Nomad",
          description: "Special visa for remote workers",
          url: "https://indonesianvisas.com/en/services/E33G",
        },
        {
          name: "E28A Investment KITAS",
          description: "Stay permit for investors",
          url: "https://indonesianvisas.com/en/services/E28A",
        },
      ],
    },
    // Tourist Visa Section
    touristVisa: {
      title: "Bali Tourist Visa for Korean Visitors",
      subtitle: "Experience the beauty of Indonesia",
      experiences: [
        { title: "Surfing", description: "Ride the waves at world-renowned surf spots" },
        { title: "Luxury Resorts", description: "Resorts with premium facilities and services" },
        { title: "Cultural Temples", description: "Experience Balinese Hindu temples and traditional culture" },
        { title: "Tropical Beaches", description: "Emerald waters and golden sandy beaches" },
      ],
      cta: "Apply for Tourist Visa",
    },
    // Digital Nomad Section
    digitalNomad: {
      title: "Digital Nomad Visa for Korean Remote Workers",
      subtitle: "Work, live, and enjoy in Bali",
      features: [
        { title: "Co-working Spaces", description: "Shared offices with modern facilities" },
        { title: "Creative Community", description: "Network with digital nomads worldwide" },
        { title: "Affordable Living", description: "Lower living costs compared to Korea" },
      ],
      cta: "Apply for Digital Nomad Visa",
    },
    // Business Section
    business: {
      title: "South Korea – Indonesia Business Opportunities",
      subtitle: "Seize opportunities at the center of growing economic cooperation",
      opportunities: [
        { title: "Trade Cooperation", description: "Utilize Korea-Indonesia Free Trade Agreement" },
        { title: "Startup Expansion", description: "Gateway to Southeast Asian market entry" },
        { title: "Tourism Industry Partnerships", description: "Collaboration opportunities in tourism and services" },
      ],
      cta: "Apply for Business Visa",
    },
    // Investment Section
    investment: {
      title: "Investment Opportunities in Indonesia",
      subtitle: "Promising sectors for Korean investors",
      sectors: [
        { title: "Tourism Industry", description: "Growing Bali tourism market" },
        { title: "Resorts & Hospitality", description: "Hotel and resort development investment" },
        { title: "Tech Startups", description: "Digital economy growth opportunities" },
        { title: "Infrastructure Projects", description: "Government-led development projects participation" },
      ],
      cta: "Apply for Investment KITAS",
    },
    // Why Choose Us Section
    whyChooseUs: {
      title: "Why Choose Our Visa Agency?",
      subtitle: "Serving customers with professionalism and trust",
      advantages: [
        { title: "Professional Visa Guidance", description: "1:1 personalized consultation by experienced consultants" },
        { title: "Document Support", description: "Assistance with complex document preparation" },
        { title: "Fast Processing", description: "Quick and accurate visa issuance" },
        { title: "Local Immigration Expertise", description: "Expert knowledge of Indonesian immigration law" },
      ],
    },
    // Application Process Section
    applicationProcess: {
      title: "Indonesia Visa Application Process",
      subtitle: "Get your visa in 4 simple steps",
      steps: [
        { step: "1", title: "Submit Inquiry", description: "Contact us online or by phone" },
        { step: "2", title: "Provide Documents", description: "Prepare and submit required documents" },
        { step: "3", title: "Visa Processing", description: "Experts handle the processing for you" },
        { step: "4", title: "Receive Approval", description: "Receive your approved visa" },
      ],
    },
    // FAQ Section
    faq: {
      title: "Frequently Asked Questions",
      subtitle: "Find answers to your questions",
      questions: [
        {
          question: "Do Korean citizens need a visa for Indonesia?",
          answer: "Yes, Korean passport holders need an appropriate visa to enter Indonesia. You can choose between Visa on Arrival (VOA) or apply for a visa in advance.",
        },
        {
          question: "How long does visa processing take?",
          answer: "Processing time varies by visa type, but typically takes 3-7 business days. Expedited processing options are also available.",
        },
        {
          question: "Can Korean tourists extend their stay?",
          answer: "Yes, VOA can be extended once for a total stay of up to 60 days. Other visa types also have extension options.",
        },
        {
          question: "Is Bali good for remote work?",
          answer: "Yes, Bali is a popular destination for digital nomads worldwide. Good infrastructure, beautiful environment, and affordable living costs are its advantages.",
        },
      ],
    },
    // Contact Section
    contact: {
      title: "Contact",
      subtitle: "Feel free to contact us anytime",
      email: "Email",
      whatsapp: "WhatsApp",
      address: "Address",
      instagram: "Instagram",
      telegram: "Telegram",
      viewMap: "View Map",
      openChat: "Open Chat",
    },
    // Inquiry Form
    inquiryForm: {
      title: "Indonesia Visa Inquiry",
      name: "Name",
      email: "Email",
      nationality: "Nationality",
      visaType: "Visa Type",
      message: "Message",
      submit: "Send Inquiry",
      selectVisa: "Select visa type",
      selectNationality: "Select nationality",
      visaTypes: [
        "B1 VOA / Extension",
        "C1 Visit Visa",
        "C2 Business Visa",
        "C12 Pre Investment",
        "D1 Tourist Visa",
        "D2 Business Visa",
        "D12 Pre Investment",
        "E33G Digital Nomad",
        "E28A Investment KITAS",
        "Other",
      ],
    },
    // Footer
    footer: {
      description: "Professional Indonesia visa services for Korean citizens. Customized visa solutions for Bali travel, business, investment, and digital nomads.",
      quickLinks: "Quick Links",
      contactUs: "Contact Us",
      copyright: "© 2024 southkoreaindonesianvisa.online. All rights reserved.",
      links: [
        { name: "Tourist Visa", url: "https://indonesianvisas.com/en/services/D1" },
        { name: "Business Visa", url: "https://indonesianvisas.com/en/services/C2" },
        { name: "Digital Nomad Visa", url: "https://indonesianvisas.com/en/services/E33G" },
        { name: "Investment KITAS", url: "https://indonesianvisas.com/en/services/E28A" },
      ],
    },
  },
};

type Language = "ko" | "en";

export default function Home() {
  const [lang, setLang] = useState<Language>("ko");
  const t = translations[lang];

  const nationalities = [
    "South Korea (대한민국)",
    "United States",
    "Japan",
    "China",
    "Singapore",
    "Malaysia",
    "Australia",
    "United Kingdom",
    "Germany",
    "Other",
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-slate-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <a
              href="https://indonesianvisas.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <img src="/Favicon.webp" alt={t.header.logo} className="h-8 w-8 object-contain" />
              <div>
                <span className="font-bold text-slate-800 text-lg">{t.header.logo}</span>
                <span className="hidden sm:inline text-xs text-slate-500 ml-2">{t.header.tagline}</span>
              </div>
            </a>

            <div className="flex items-center gap-2">
              {/* Contact Us CTA (Pop Form) */}
              <Dialog>
                <DialogTrigger asChild>
                  <Button size="sm" className="bg-sky-500 hover:bg-sky-600 text-white">
                    Contact Us
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px] max-h-[90vh] overflow-y-auto">
                  <DialogHeader>
                    <DialogTitle>{t.inquiryForm.title}</DialogTitle>
                  </DialogHeader>
                  <form
                    action="https://formspree.io/f/xwvrpdoy"
                    method="POST"
                    className="space-y-4 pt-4"
                  >
                    <div>
                      <Label htmlFor="pop-name" className="text-slate-700">{t.inquiryForm.name}</Label>
                      <Input id="pop-name" name="name" type="text" required className="mt-1" placeholder={lang === "ko" ? "이름을 입력하세요" : "Enter your name"} />
                    </div>
                    <div>
                      <Label htmlFor="pop-email" className="text-slate-700">{t.inquiryForm.email}</Label>
                      <Input id="pop-email" name="email" type="email" required className="mt-1" placeholder={lang === "ko" ? "이메일을 입력하세요" : "Enter your email"} />
                    </div>
                    <div>
                      <Label htmlFor="pop-message" className="text-slate-700">{t.inquiryForm.message}</Label>
                      <Textarea id="pop-message" name="message" required rows={3} className="mt-1" placeholder={lang === "ko" ? "문의 내용을 입력하세요..." : "Enter your message..."} />
                    </div>
                    <Button type="submit" className="w-full bg-sky-500 hover:bg-sky-600 text-white mt-4">
                      {t.inquiryForm.submit}
                      <Send className="h-4 w-4 ml-2" />
                    </Button>
                    <a href="https://wa.me/6285727041992" target="_blank" rel="noopener noreferrer" className="block w-full mt-2">
                      <Button type="button" variant="outline" className="w-full border-green-500 text-green-600 hover:bg-green-50">
                        Contact WhatsApp
                        <MessageCircle className="h-4 w-4 ml-2" />
                      </Button>
                    </a>
                  </form>
                </DialogContent>
              </Dialog>

              {/* Language Switcher */}
              <Button
                variant="ghost"
                onClick={() => setLang(lang === "ko" ? "en" : "ko")}
                className="gap-2 text-slate-600 hover:text-slate-800 hover:bg-sky-50"
              >
                <Globe className="h-4 w-4" />
                {t.header.languageSwitch}
              </Button>
            </div>
          </div>
        </div>
      </header>

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-sky-50 via-white to-sky-50 py-12 sm:py-16 lg:py-24 overflow-hidden">
          <div className="absolute inset-0 bg-[url('/images/hero-bali.png')] bg-cover bg-center opacity-10"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div className="text-center lg:text-left">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-800 leading-tight mb-4 sm:mb-6">
                  {t.hero.title}
                </h1>
                <p className="text-lg sm:text-xl text-slate-600 mb-6 sm:mb-8 leading-relaxed">
                  {t.hero.subtitle}
                </p>
                <div className="flex flex-wrap justify-center lg:justify-start gap-3 sm:gap-4">
                  <a
                    href="https://indonesianvisas.com/en/services/D1"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      size="lg"
                      className="bg-sky-500 hover:bg-sky-600 text-white gap-2 px-6 sm:px-8"
                    >
                      <Plane className="h-5 w-5" />
                      {t.hero.cta.tourist}
                    </Button>
                  </a>
                  <a
                    href="https://indonesianvisas.com/en/services/C2"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      size="lg"
                      variant="outline"
                      className="border-sky-300 text-sky-600 hover:bg-sky-50 gap-2 px-6 sm:px-8"
                    >
                      <Briefcase className="h-5 w-5" />
                      {t.hero.cta.business}
                    </Button>
                  </a>
                  <a
                    href="https://indonesianvisas.com/en/services/E33G"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      size="lg"
                      variant="outline"
                      className="border-sky-300 text-sky-600 hover:bg-sky-50 gap-2 px-6 sm:px-8"
                    >
                      <Laptop className="h-5 w-5" />
                      {t.hero.cta.digitalNomad}
                    </Button>
                  </a>
                </div>
                <div className="mt-4">
                  <a
                    href="https://indonesianvisas.com/en/services"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-sky-600 hover:text-sky-700 font-medium gap-1"
                  >
                    {t.hero.cta.allOptions}
                    <ChevronRight className="h-4 w-4" />
                  </a>
                </div>
              </div>
              <div className="hidden lg:block">
                <img
                  src="/images/hero-bali.png"
                  alt="Bali Beach"
                  className="rounded-2xl shadow-2xl w-full"
                  loading="eager"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Why Bali Section */}
        <section className="py-12 sm:py-16 lg:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-800 mb-3 sm:mb-4">
                {t.whyBali.title}
              </h2>
              <p className="text-lg text-slate-600">{t.whyBali.subtitle}</p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              {t.whyBali.features.map((feature, index) => (
                <Card
                  key={index}
                  className="border border-slate-100 hover:border-sky-200 hover:shadow-lg transition-all duration-300 bg-white"
                >
                  <CardHeader>
                    <div className="w-12 h-12 bg-sky-100 rounded-xl flex items-center justify-center mb-4">
                      {index === 0 && <Heart className="h-6 w-6 text-sky-500" />}
                      {index === 1 && <Palmtree className="h-6 w-6 text-sky-500" />}
                      {index === 2 && <Building2 className="h-6 w-6 text-sky-500" />}
                      {index === 3 && <Camera className="h-6 w-6 text-sky-500" />}
                    </div>
                    <CardTitle className="text-lg text-slate-800">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="mt-8 sm:mt-10 text-center">
              <img
                src="/images/bali-honeymoon.png"
                alt="Bali Honeymoon"
                className="rounded-xl shadow-lg max-w-3xl mx-auto w-full"
                loading="lazy"
              />
            </div>
          </div>
        </section>

        {/* Visa Options Section */}
        <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-white to-sky-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-800 mb-3 sm:mb-4">
                {t.visaOptions.title}
              </h2>
              <p className="text-lg text-slate-600">{t.visaOptions.subtitle}</p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {t.visaOptions.visas.map((visa, index) => (
                <Card
                  key={index}
                  className="border border-slate-100 hover:border-sky-300 hover:shadow-xl transition-all duration-300 bg-white group"
                >
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg text-slate-800 group-hover:text-sky-600 transition-colors">
                      {visa.name}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pb-4">
                    <p className="text-slate-600 text-sm">{visa.description}</p>
                  </CardContent>
                  <CardFooter>
                    <a href={visa.url} target="_blank" rel="noopener noreferrer" className="w-full">
                      <Button className="w-full bg-sky-500 hover:bg-sky-600 text-white">
                        {t.visaOptions.apply}
                        <ChevronRight className="h-4 w-4 ml-1" />
                      </Button>
                    </a>
                  </CardFooter>
                </Card>
              ))}
            </div>
            <div className="mt-8 sm:mt-10 text-center">
              <a
                href="https://indonesianvisas.com/en/services"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outline" size="lg" className="border-sky-300 text-sky-600 hover:bg-sky-50 gap-2">
                  {t.visaOptions.viewAll}
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </a>
            </div>
          </div>
        </section>

        {/* Tourist Visa Section */}
        <section className="py-12 sm:py-16 lg:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-800 mb-3 sm:mb-4">
                  {t.touristVisa.title}
                </h2>
                <p className="text-lg text-slate-600 mb-6 sm:mb-8">{t.touristVisa.subtitle}</p>
                <div className="grid grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8">
                  {t.touristVisa.experiences.map((exp, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-sky-100 rounded-lg flex items-center justify-center shrink-0">
                        {index === 0 && <Waves className="h-5 w-5 text-sky-500" />}
                        {index === 1 && <Building2 className="h-5 w-5 text-sky-500" />}
                        {index === 2 && <Mountain className="h-5 w-5 text-sky-500" />}
                        {index === 3 && <Palmtree className="h-5 w-5 text-sky-500" />}
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-800">{exp.title}</h4>
                        <p className="text-sm text-slate-600">{exp.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <a
                  href="https://indonesianvisas.com/en/services/D1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button size="lg" className="bg-sky-500 hover:bg-sky-600 text-white gap-2">
                    {t.touristVisa.cta}
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </a>
              </div>
              <div>
                <img
                  src="/images/bali-temple.png"
                  alt="Bali Temple"
                  className="rounded-2xl shadow-xl w-full"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Digital Nomad Section */}
        <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-sky-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div className="order-2 lg:order-1">
                <img
                  src="/images/digital-nomad.png"
                  alt="Digital Nomad in Bali"
                  className="rounded-2xl shadow-xl w-full"
                  loading="lazy"
                />
              </div>
              <div className="order-1 lg:order-2">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-800 mb-3 sm:mb-4">
                  {t.digitalNomad.title}
                </h2>
                <p className="text-lg text-slate-600 mb-6 sm:mb-8">{t.digitalNomad.subtitle}</p>
                <div className="space-y-4 sm:space-y-6 mb-6 sm:mb-8">
                  {t.digitalNomad.features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-sky-100 rounded-lg flex items-center justify-center shrink-0">
                        {index === 0 && <Building2 className="h-5 w-5 text-sky-500" />}
                        {index === 1 && <Users className="h-5 w-5 text-sky-500" />}
                        {index === 2 && <TrendingUp className="h-5 w-5 text-sky-500" />}
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-800">{feature.title}</h4>
                        <p className="text-slate-600">{feature.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <a
                  href="https://indonesianvisas.com/en/services/E33G"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button size="lg" className="bg-sky-500 hover:bg-sky-600 text-white gap-2">
                    {t.digitalNomad.cta}
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Business Section */}
        <section className="py-12 sm:py-16 lg:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-800 mb-3 sm:mb-4">
                  {t.business.title}
                </h2>
                <p className="text-lg text-slate-600 mb-6 sm:mb-8">{t.business.subtitle}</p>
                <div className="space-y-4 sm:space-y-6 mb-6 sm:mb-8">
                  {t.business.opportunities.map((opp, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-sky-100 rounded-lg flex items-center justify-center shrink-0">
                        {index === 0 && <TrendingUp className="h-5 w-5 text-sky-500" />}
                        {index === 1 && <Building2 className="h-5 w-5 text-sky-500" />}
                        {index === 2 && <Users className="h-5 w-5 text-sky-500" />}
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-800">{opp.title}</h4>
                        <p className="text-slate-600">{opp.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <a
                  href="https://indonesianvisas.com/en/services/C2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button size="lg" className="bg-sky-500 hover:bg-sky-600 text-white gap-2">
                    {t.business.cta}
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </a>
              </div>
              <div>
                <img
                  src="/images/business.png"
                  alt="Business in Indonesia"
                  className="rounded-2xl shadow-xl w-full"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Investment Section */}
        <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-white to-sky-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-800 mb-3 sm:mb-4">
                {t.investment.title}
              </h2>
              <p className="text-lg text-slate-600">{t.investment.subtitle}</p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8 sm:mb-10">
              {t.investment.sectors.map((sector, index) => (
                <Card
                  key={index}
                  className="border border-slate-100 hover:border-sky-200 hover:shadow-lg transition-all duration-300 bg-white"
                >
                  <CardHeader>
                    <div className="w-12 h-12 bg-sky-100 rounded-xl flex items-center justify-center mb-4">
                      {index === 0 && <Palmtree className="h-6 w-6 text-sky-500" />}
                      {index === 1 && <Building2 className="h-6 w-6 text-sky-500" />}
                      {index === 2 && <Laptop className="h-6 w-6 text-sky-500" />}
                      {index === 3 && <TrendingUp className="h-6 w-6 text-sky-500" />}
                    </div>
                    <CardTitle className="text-lg text-slate-800">{sector.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600">{sector.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="text-center">
              <a
                href="https://indonesianvisas.com/en/services/E28A"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="lg" className="bg-sky-500 hover:bg-sky-600 text-white gap-2">
                  {t.investment.cta}
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </a>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-12 sm:py-16 lg:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-800 mb-3 sm:mb-4">
                {t.whyChooseUs.title}
              </h2>
              <p className="text-lg text-slate-600">{t.whyChooseUs.subtitle}</p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {t.whyChooseUs.advantages.map((adv, index) => (
                <div
                  key={index}
                  className="text-center p-6 sm:p-8 rounded-2xl bg-gradient-to-b from-sky-50 to-white border border-sky-100"
                >
                  <div className="w-16 h-16 bg-sky-100 rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6">
                    {index === 0 && <Users className="h-8 w-8 text-sky-500" />}
                    {index === 1 && <FileText className="h-8 w-8 text-sky-500" />}
                    {index === 2 && <Clock className="h-8 w-8 text-sky-500" />}
                    {index === 3 && <Shield className="h-8 w-8 text-sky-500" />}
                  </div>
                  <h3 className="text-lg font-bold text-slate-800 mb-2">{adv.title}</h3>
                  <p className="text-slate-600">{adv.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Application Process Section */}
        <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-sky-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-800 mb-3 sm:mb-4">
                {t.applicationProcess.title}
              </h2>
              <p className="text-lg text-slate-600">{t.applicationProcess.subtitle}</p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              {t.applicationProcess.steps.map((step, index) => (
                <div key={index} className="relative">
                  <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-100 shadow-lg hover:shadow-xl transition-shadow text-center">
                    <div className="w-14 h-14 bg-sky-500 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 text-white text-2xl font-bold">
                      {step.step}
                    </div>
                    <h3 className="text-lg font-bold text-slate-800 mb-2">{step.title}</h3>
                    <p className="text-slate-600">{step.description}</p>
                  </div>
                  {index < 3 && (
                    <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                      <ChevronRight className="h-8 w-8 text-sky-300" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-12 sm:py-16 lg:py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-800 mb-3 sm:mb-4">
                {t.faq.title}
              </h2>
              <p className="text-lg text-slate-600">{t.faq.subtitle}</p>
            </div>
            <Accordion type="single" collapsible className="space-y-4">
              {t.faq.questions.map((item, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-white border border-slate-200 rounded-xl px-6 shadow-sm"
                >
                  <AccordionTrigger className="text-left text-slate-800 font-semibold hover:text-sky-600 py-4">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-600 pb-4">{item.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-white to-sky-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
              {/* Contact Info */}
              <div>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-800 mb-3 sm:mb-4">
                  {t.contact.title}
                </h2>
                <p className="text-lg text-slate-600 mb-6 sm:mb-8">{t.contact.subtitle}</p>

                <div className="space-y-4 sm:space-y-6">
                  {/* Email */}
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-sky-100 rounded-xl flex items-center justify-center shrink-0">
                      <Mail className="h-6 w-6 text-sky-500" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-800">{t.contact.email}</h4>
                      <a
                        href="mailto:contact@indonesianvisas.agency"
                        className="text-sky-600 hover:text-sky-700"
                      >
                        contact@indonesianvisas.agency
                      </a>
                    </div>
                  </div>

                  {/* WhatsApp */}
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-sky-100 rounded-xl flex items-center justify-center shrink-0">
                      <MessageCircle className="h-6 w-6 text-sky-500" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-800">{t.contact.whatsapp}</h4>
                      <div className="flex items-center gap-3">
                        <a href="https://wa.me/6285727041992" target="_blank" rel="noopener noreferrer" className="text-slate-600 hover:text-sky-600">
                          +62 85727041992
                        </a>
                        <a
                          href="https://wa.me/6285727041992"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Button size="sm" className="bg-sky-500 hover:bg-sky-600 text-white gap-1">
                            {t.contact.openChat}
                          </Button>
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Address */}
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-sky-100 rounded-xl flex items-center justify-center shrink-0">
                      <MapPin className="h-6 w-6 text-sky-500" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-800">{t.contact.address}</h4>
                      <p className="text-slate-600">Seoul, South Korea</p>
                      <a
                        href="https://maps.app.goo.gl/N87NgLvE4Ma3qREK7"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sky-600 hover:text-sky-700 text-sm inline-flex items-center gap-1 mt-1"
                      >
                        {t.contact.viewMap}
                        <ChevronRight className="h-3 w-3" />
                      </a>
                    </div>
                  </div>

                  {/* Instagram */}
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-sky-100 rounded-xl flex items-center justify-center shrink-0">
                      <Instagram className="h-6 w-6 text-sky-500" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-800">{t.contact.instagram}</h4>
                      <a
                        href="https://instagram.com/balihelp.id"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sky-600 hover:text-sky-700"
                      >
                        @balihelp.id
                      </a>
                    </div>
                  </div>

                  {/* Telegram */}
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-sky-100 rounded-xl flex items-center justify-center shrink-0">
                      <Send className="h-6 w-6 text-sky-500" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-800">{t.contact.telegram}</h4>
                      <span className="text-slate-600">IndonesianVisas</span>
                    </div>
                  </div>
                </div>

                <div className="mt-6 sm:mt-8">
                  <img
                    src="/images/visa-documents.png"
                    alt="Visa Documents"
                    className="rounded-xl shadow-lg max-w-xs w-full"
                    loading="lazy"
                  />
                </div>
              </div>

              {/* Inquiry Form */}
              <div>
                <Card className="border-0 shadow-2xl bg-white">
                  <CardHeader className="bg-gradient-to-r from-sky-500 to-sky-400 rounded-t-lg">
                    <CardTitle className="text-xl sm:text-2xl text-white">{t.inquiryForm.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <form
                      action="https://formspree.io/f/xwvrpdoy"
                      method="POST"
                      className="space-y-4 sm:space-y-5"
                    >
                      <div>
                        <Label htmlFor="name" className="text-slate-700">
                          {t.inquiryForm.name}
                        </Label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          required
                          className="mt-1.5 border-slate-200 focus:border-sky-400 focus:ring-sky-400"
                          placeholder={lang === "ko" ? "이름을 입력하세요" : "Enter your name"}
                        />
                      </div>

                      <div>
                        <Label htmlFor="email" className="text-slate-700">
                          {t.inquiryForm.email}
                        </Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          required
                          className="mt-1.5 border-slate-200 focus:border-sky-400 focus:ring-sky-400"
                          placeholder={lang === "ko" ? "이메일을 입력하세요" : "Enter your email"}
                        />
                      </div>

                      <div>
                        <Label htmlFor="nationality" className="text-slate-700">
                          {t.inquiryForm.nationality}
                        </Label>
                        <Select name="nationality" required>
                          <SelectTrigger className="mt-1.5 border-slate-200 focus:border-sky-400 focus:ring-sky-400">
                            <SelectValue placeholder={t.inquiryForm.selectNationality} />
                          </SelectTrigger>
                          <SelectContent>
                            {nationalities.map((nat) => (
                              <SelectItem key={nat} value={nat}>
                                {nat}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>

                      <div>
                        <Label htmlFor="visaType" className="text-slate-700">
                          {t.inquiryForm.visaType}
                        </Label>
                        <Select name="visaType" required>
                          <SelectTrigger className="mt-1.5 border-slate-200 focus:border-sky-400 focus:ring-sky-400">
                            <SelectValue placeholder={t.inquiryForm.selectVisa} />
                          </SelectTrigger>
                          <SelectContent>
                            {t.inquiryForm.visaTypes.map((visa) => (
                              <SelectItem key={visa} value={visa}>
                                {visa}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>

                      <div>
                        <Label htmlFor="message" className="text-slate-700">
                          {t.inquiryForm.message}
                        </Label>
                        <Textarea
                          id="message"
                          name="message"
                          required
                          rows={4}
                          className="mt-1.5 border-slate-200 focus:border-sky-400 focus:ring-sky-400"
                          placeholder={
                            lang === "ko"
                              ? "문의 내용을 입력하세요..."
                              : "Enter your message..."
                          }
                        />
                      </div>

                      <Button
                        type="submit"
                        className="w-full bg-sky-500 hover:bg-sky-600 text-white py-6 text-lg mb-2"
                      >
                        {t.inquiryForm.submit}
                        <Send className="h-5 w-5 ml-2" />
                      </Button>
                      <a href="https://wa.me/6285727041992" target="_blank" rel="noopener noreferrer" className="block w-full">
                        <Button type="button" variant="outline" className="w-full border-green-500 text-green-600 hover:bg-green-50 py-6 text-lg">
                          Contact WhatsApp
                          <MessageCircle className="h-5 w-5 ml-2" />
                        </Button>
                      </a>
                    </form>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-slate-800 text-white py-10 sm:py-12 mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            {/* Brand */}
            <div className="sm:col-span-2 lg:col-span-1">
              <div className="flex items-center gap-2 mb-4">
                <img src="/Favicon.webp" alt={t.header.logo} className="h-6 w-6 object-contain" />
                <span className="font-bold text-lg">{t.header.logo}</span>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed">
                Indonesia Visa<br />
                By PT Indonesian Visas Agency
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold text-white mb-4">{t.footer.quickLinks}</h4>
              <ul className="space-y-2">
                {t.footer.links.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-400 hover:text-sky-400 transition-colors text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-semibold text-white mb-4">{t.footer.contactUs}</h4>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li>
                  <a
                    href="mailto:contact@indonesianvisas.agency"
                    className="hover:text-sky-400 transition-colors"
                  >
                    contact@indonesianvisas.agency
                  </a>
                </li>
                <li>
                  <a href="https://wa.me/6285727041992" target="_blank" rel="noopener noreferrer" className="hover:text-sky-400 transition-colors">
                    +62 85727041992
                  </a>
                </li>
                <li>Seoul, South Korea</li>
              </ul>
            </div>

            {/* Language */}
            <div>
              <h4 className="font-semibold text-white mb-4">
                {lang === "ko" ? "언어" : "Language"}
              </h4>
              <Button
                variant="outline"
                onClick={() => setLang(lang === "ko" ? "en" : "ko")}
                className="border-slate-600 text-slate-300 hover:bg-slate-700 hover:text-white gap-2"
              >
                <Globe className="h-4 w-4" />
                {t.header.languageSwitch}
              </Button>
            </div>
          </div>

          <div className="border-t border-slate-700 pt-8 text-center">
            <p className="text-slate-400 text-sm">{t.footer.copyright}</p>
            <p className="text-slate-500 text-xs mt-2">
              {lang === "ko"
                ? "이 웹사이트는 indonesianvisas.com의 위성 SEO 웹사이트입니다."
                : "This website is a satellite SEO website for indonesianvisas.com"}
            </p>
          </div>
        </div>
      </footer>

      {/* Schema.org Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "TravelAgency",
            name: "Indonesia Visa Services for South Korean Citizens",
            description:
              "Professional Indonesia visa services for South Korean citizens. Tourist visa, business visa, digital nomad visa, and investment KITAS services.",
            url: "https://southkoreaindonesiavisa.online",
            logo: "https://southkoreaindonesiavisa.online/logo.svg",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Seoul",
              addressCountry: "KR",
            },
            contactPoint: {
              "@type": "ContactPoint",
              telephone: "+62-857-2704-1992",
              contactType: "customer service",
              availableLanguage: ["Korean", "English"],
            },
            sameAs: [
              "https://instagram.com/balihelp.id",
              "https://indonesianvisas.com",
            ],
            areaServed: {
              "@type": "Country",
              name: "South Korea",
            },
            serviceType: [
              "Indonesia Tourist Visa",
              "Indonesia Business Visa",
              "Indonesia Digital Nomad Visa",
              "Indonesia Investment KITAS",
              "Visa on Arrival Extension",
            ],
          }),
        }}
      />
    </div>
  );
}
