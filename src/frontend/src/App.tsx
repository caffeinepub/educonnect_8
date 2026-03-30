import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import {
  AlertTriangle,
  Award,
  Bell,
  BookOpen,
  Camera,
  ChevronDown,
  ChevronRight,
  Download,
  Edit2,
  FileText,
  Globe,
  GraduationCap,
  HelpCircle,
  Home,
  Info,
  Instagram,
  Layers,
  Linkedin,
  Lock,
  LogOut,
  Mail,
  MapPin,
  MessageCircle,
  Moon,
  Phone,
  Save,
  Search,
  Send,
  Star,
  Sun,
  ThumbsUp,
  Upload,
  User,
  X,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import TeacherSection from "./TeacherSection";

// ─── Types ─────────────────────────────────────────────────────────────────────
interface Note {
  id: number;
  title: string;
  subject: string;
  teacher: string;
  type: string;
  size: string;
}

interface FAQ {
  question: string;
  answer: string;
}

const NOTES: Note[] = [
  {
    id: 1,
    title: "Physics Ch.1 – Mechanics",
    subject: "Physics",
    teacher: "Dr. Anil Sharma",
    type: "PDF",
    size: "2.4 MB",
  },
  {
    id: 2,
    title: "Chemistry Lab Report",
    subject: "Chemistry",
    teacher: "Prof. Priya Singh",
    type: "DOC",
    size: "1.1 MB",
  },
  {
    id: 3,
    title: "Math Formula Sheet",
    subject: "Mathematics",
    teacher: "Mr. Rajesh Kumar",
    type: "PDF",
    size: "850 KB",
  },
  {
    id: 4,
    title: "Thermodynamics Notes",
    subject: "Physics",
    teacher: "Dr. Anil Sharma",
    type: "PDF",
    size: "3.2 MB",
  },
  {
    id: 5,
    title: "Organic Chemistry Summary",
    subject: "Chemistry",
    teacher: "Prof. Priya Singh",
    type: "PDF",
    size: "1.8 MB",
  },
  {
    id: 6,
    title: "Calculus Practice Problems",
    subject: "Mathematics",
    teacher: "Mr. Rajesh Kumar",
    type: "DOC",
    size: "980 KB",
  },
];

const FAQS: FAQ[] = [
  {
    question: "How do I reset my password?",
    answer:
      "Go to Profile → Account Settings → Change Password. Enter your current password and set a new one with at least 8 characters.",
  },
  {
    question: "How do I download notes?",
    answer:
      "Navigate to the Notes section or any Teacher Profile. Click the download icon next to any file to save it to your device.",
  },
  {
    question: "How can I chat with a teacher?",
    answer:
      "Open the Teachers section, find your teacher, and click the Chat button on their card. You can send messages directly.",
  },
  {
    question: "Can I edit my profile info?",
    answer:
      "Yes! Go to Profile → Student Info card and click the Edit button. Update your details and click Save to apply changes.",
  },
];

// ─── Main App ──────────────────────────────────────────────────────────────────
export default function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [activeSection, setActiveSection] = useState("home");
  const [editingProfile, setEditingProfile] = useState(false);
  const [notifications, setNotifications] = useState(true);
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);

  const [profile, setProfile] = useState({
    name: "Vikas Kumar",
    email: "vikas.kumar@student.edu",
    phone: "+91 99887 76655",
    scholarNo: "2021CS001",
    course: "B.Tech CSE",
    year: "3rd Year",
    college: "ABC College of Engineering",
    address: "Plot 12, Sector 5, New Delhi – 110001",
  });
  const [editProfile, setEditProfile] = useState({ ...profile });

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  const sections = [
    { id: "home", label: "Home", icon: Home },
    { id: "profile", label: "Profile", icon: User },
    { id: "teachers", label: "Teachers", icon: GraduationCap },
    { id: "notes", label: "Notes", icon: BookOpen },
    { id: "about", label: "About", icon: Info },
  ];

  function saveProfile() {
    setProfile({ ...editProfile });
    setEditingProfile(false);
  }

  const glassBg = darkMode
    ? "rgba(255,255,255,0.06)"
    : "rgba(255,255,255,0.65)";
  const glassBorder = darkMode
    ? "rgba(255,255,255,0.10)"
    : "rgba(100,120,200,0.18)";
  const headingColor = darkMode ? "#F2F5FF" : "#1e2656";
  const bodyColor = darkMode ? "#AEB6D0" : "#3a4272";
  const mutedColor = darkMode ? "#7E89A8" : "#6b7ab8";

  const glassStyle = {
    background: glassBg,
    border: `1px solid ${glassBorder}`,
    backdropFilter: "blur(16px)",
    WebkitBackdropFilter: "blur(16px)",
  };

  // ── Render ──────────────────────────────────────────────────────────────────
  return (
    <div
      className={darkMode ? "page-bg" : "page-bg-light"}
      style={{ fontFamily: "Inter, sans-serif" }}
    >
      {/* Ambient blobs */}
      <div
        style={{
          position: "fixed",
          inset: 0,
          pointerEvents: "none",
          zIndex: 0,
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            width: 600,
            height: 600,
            borderRadius: "50%",
            top: "-200px",
            left: "-100px",
            background:
              "radial-gradient(circle, rgba(59,130,246,0.12) 0%, transparent 70%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            width: 500,
            height: 500,
            borderRadius: "50%",
            top: "30%",
            right: "-100px",
            background:
              "radial-gradient(circle, rgba(139,92,246,0.12) 0%, transparent 70%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            width: 400,
            height: 400,
            borderRadius: "50%",
            bottom: "10%",
            left: "30%",
            background:
              "radial-gradient(circle, rgba(177,92,255,0.08) 0%, transparent 70%)",
          }}
        />
      </div>

      {/* ── Header ── */}
      <header
        style={{
          ...glassStyle,
          position: "sticky",
          top: 0,
          zIndex: 50,
          boxShadow: "0 12px 40px rgba(0,0,0,0.3)",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl gradient-strip flex items-center justify-center">
              <GraduationCap size={18} className="text-white" />
            </div>
            <span className="font-bold text-lg gradient-text">EduConnect</span>
          </div>

          {/* Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {sections.map((s) => (
              <button
                type="button"
                key={s.id}
                data-ocid={`nav.${s.id}.link`}
                onClick={() => setActiveSection(s.id)}
                className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  activeSection === s.id
                    ? "gradient-btn text-white"
                    : "hover:bg-white/10 text-foreground"
                }`}
              >
                <s.icon size={14} />
                {s.label}
              </button>
            ))}
          </nav>

          {/* Right */}
          <div className="flex items-center gap-3">
            <button
              type="button"
              data-ocid="header.dark_mode.toggle"
              onClick={() => setDarkMode(!darkMode)}
              className="w-9 h-9 rounded-full flex items-center justify-center transition-all hover:bg-white/10"
              style={{ ...glassStyle, border: `1px solid ${glassBorder}` }}
            >
              {darkMode ? (
                <Sun size={16} className="text-yellow-400" />
              ) : (
                <Moon size={16} style={{ color: headingColor }} />
              )}
            </button>
            <div
              className="flex items-center gap-2 px-3 py-1.5 rounded-full"
              style={glassStyle}
            >
              <div className="w-7 h-7 rounded-full gradient-strip flex items-center justify-center text-white text-xs font-bold">
                VK
              </div>
              <span
                className="text-sm font-medium hidden sm:block"
                style={{ color: headingColor }}
              >
                {profile.name.split(" ")[0]}
              </span>
              <ChevronDown size={13} style={{ color: mutedColor }} />
            </div>
          </div>
        </div>
      </header>

      {/* ── Content ── */}
      <main className="relative z-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSection}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.35 }}
          >
            {/* HOME */}
            {activeSection === "home" && (
              <HomeSection
                headingColor={headingColor}
                bodyColor={bodyColor}
                glassStyle={glassStyle}
                onNavigate={setActiveSection}
              />
            )}

            {/* PROFILE */}
            {activeSection === "profile" && (
              <ProfileSection
                profile={profile}
                editProfile={editProfile}
                setEditProfile={setEditProfile}
                editingProfile={editingProfile}
                setEditingProfile={setEditingProfile}
                saveProfile={saveProfile}
                darkMode={darkMode}
                headingColor={headingColor}
                bodyColor={bodyColor}
                mutedColor={mutedColor}
                glassStyle={glassStyle}
                notifications={notifications}
                setNotifications={setNotifications}
                onDarkMode={setDarkMode}
              />
            )}

            {/* TEACHERS */}
            {activeSection === "teachers" && (
              <TeacherSection darkMode={darkMode} />
            )}

            {/* NOTES */}
            {activeSection === "notes" && (
              <NotesSection
                headingColor={headingColor}
                bodyColor={bodyColor}
                mutedColor={mutedColor}
                glassStyle={glassStyle}
              />
            )}

            {/* ABOUT */}
            {activeSection === "about" && (
              <AboutSection
                headingColor={headingColor}
                bodyColor={bodyColor}
                mutedColor={mutedColor}
                glassStyle={glassStyle}
                expandedFAQ={expandedFAQ}
                setExpandedFAQ={setExpandedFAQ}
              />
            )}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* ── Footer ── */}
      <footer
        className="relative z-10 mt-20 border-t"
        style={{ borderColor: glassBorder }}
      >
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-lg gradient-strip flex items-center justify-center">
                <GraduationCap size={12} className="text-white" />
              </div>
              <span className="font-semibold gradient-text">EduConnect</span>
              <span className="text-xs" style={{ color: mutedColor }}>
                v1.0.0
              </span>
            </div>
            <div
              className="flex items-center gap-6 text-sm"
              style={{ color: mutedColor }}
            >
              <a
                href="https://educonnect.edu"
                className="hover:text-blue-400 transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="https://educonnect.edu"
                className="hover:text-blue-400 transition-colors"
              >
                Terms
              </a>
              <a
                href="https://educonnect.edu"
                className="hover:text-blue-400 transition-colors"
              >
                Support
              </a>
            </div>
            <p className="text-xs" style={{ color: mutedColor }}>
              © {new Date().getFullYear()}. Built with ♥ using{" "}
              <a
                href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(window.location.hostname)}`}
                className="text-blue-400 hover:underline"
                target="_blank"
                rel="noreferrer"
              >
                caffeine.ai
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

// ─── Home Section ──────────────────────────────────────────────────────────────
function HomeSection({
  headingColor,
  bodyColor,
  glassStyle,
  onNavigate,
}: {
  headingColor: string;
  bodyColor: string;
  glassStyle: React.CSSProperties;
  onNavigate: (s: string) => void;
}) {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-24">
      {/* Hero */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Badge className="mb-4 rounded-full px-4 py-1 text-xs font-semibold gradient-btn text-white border-0">
            🎓 EduConnect v1.0.0
          </Badge>
          <h1
            className="text-5xl lg:text-6xl font-extrabold leading-tight mb-6"
            style={{ color: headingColor }}
          >
            Smart Campus, <span className="gradient-text">Smart Students</span>
          </h1>
          <p
            className="text-lg mb-8 leading-relaxed"
            style={{ color: bodyColor }}
          >
            Your all-in-one college companion. Connect with teachers, access
            study materials, track performance, and manage your academic life —
            all in one beautiful app.
          </p>
          <div className="flex items-center gap-4">
            <button
              type="button"
              data-ocid="hero.explore.button"
              onClick={() => onNavigate("profile")}
              className="gradient-btn text-white font-semibold px-8 py-3 rounded-full text-base"
            >
              Explore Features
            </button>
            <button
              type="button"
              data-ocid="hero.teachers.button"
              onClick={() => onNavigate("teachers")}
              className="font-medium text-sm px-6 py-3 rounded-full transition-all hover:bg-white/10"
              style={{
                color: bodyColor,
                border: "1px solid rgba(255,255,255,0.15)",
              }}
            >
              Meet Teachers →
            </button>
          </div>
        </motion.div>

        {/* Decorative phone mockup */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="flex justify-center lg:justify-end"
        >
          <div className="relative">
            {/* Gradient panel */}
            <div
              className="w-72 h-96 rounded-3xl gradient-strip"
              style={{
                transform: "rotate(6deg)",
                boxShadow: "0 24px 64px rgba(139,92,246,0.4)",
              }}
            >
              {/* Arrow doodles */}
              <div className="absolute top-6 right-6 opacity-30">
                <ChevronRight size={28} className="text-white" />
              </div>
              <div className="absolute bottom-12 left-6 opacity-20">
                <ChevronRight
                  size={20}
                  className="text-white"
                  style={{ transform: "rotate(45deg)" }}
                />
              </div>
            </div>
            {/* Phone screen */}
            <div
              className="absolute inset-0 m-6 rounded-2xl overflow-hidden"
              style={{
                background: "rgba(11,16,32,0.9)",
                border: "1px solid rgba(255,255,255,0.15)",
                backdropFilter: "blur(10px)",
                transform: "rotate(6deg)",
              }}
            >
              <div className="p-4">
                <div className="h-2 w-16 rounded-full gradient-strip mb-3" />
                <div className="space-y-2">
                  {["Profile", "Teachers", "Notes", "About"].map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-2 p-2 rounded-lg"
                      style={{ background: "rgba(255,255,255,0.05)" }}
                    >
                      <div className="w-3 h-3 rounded-full gradient-strip" />
                      <span className="text-xs text-white">{item}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-4 h-20 rounded-xl gradient-strip opacity-60" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Feature cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          {
            icon: User,
            title: "Smart Profile",
            desc: "Manage your academic info, settings, and photo in one place.",
            color: "#3B82F6",
          },
          {
            icon: GraduationCap,
            title: "Teacher Connect",
            desc: "View profiles, download notes, and chat with teachers easily.",
            color: "#8B5CF6",
          },
          {
            icon: BookOpen,
            title: "Study Materials",
            desc: "Access all PDFs, assignments, and notes anytime, anywhere.",
            color: "#B15CFF",
          },
        ].map((f, i) => (
          <motion.div
            key={f.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + i * 0.1 }}
            className="p-6 rounded-2xl hover:scale-105 transition-transform duration-300 cursor-pointer"
            style={{ ...glassStyle, boxShadow: `0 0 40px ${f.color}18` }}
            onClick={() =>
              onNavigate(i === 0 ? "profile" : i === 1 ? "teachers" : "notes")
            }
          >
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
              style={{
                background: `${f.color}22`,
                border: `1px solid ${f.color}33`,
              }}
            >
              <f.icon size={22} style={{ color: f.color }} />
            </div>
            <h3
              className="font-bold text-base mb-2"
              style={{ color: headingColor }}
            >
              {f.title}
            </h3>
            <p className="text-sm leading-relaxed" style={{ color: bodyColor }}>
              {f.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

// ─── Profile Section ───────────────────────────────────────────────────────────
function ProfileSection({
  profile,
  editProfile,
  setEditProfile,
  editingProfile,
  setEditingProfile,
  saveProfile,
  darkMode,
  headingColor,
  bodyColor,
  mutedColor,
  glassStyle,
  notifications,
  setNotifications,
  onDarkMode,
}: {
  profile: Record<string, string>;
  editProfile: Record<string, string>;
  setEditProfile: (v: any) => void;
  editingProfile: boolean;
  setEditingProfile: (v: boolean) => void;
  saveProfile: () => void;
  darkMode: boolean;
  headingColor: string;
  bodyColor: string;
  mutedColor: string;
  glassStyle: React.CSSProperties;
  notifications: boolean;
  setNotifications: (v: boolean) => void;
  onDarkMode: (v: boolean) => void;
}) {
  const fields = [
    { key: "name", label: "Full Name" },
    { key: "email", label: "Email" },
    { key: "phone", label: "Phone" },
    { key: "scholarNo", label: "Scholar Number" },
    { key: "course", label: "Course" },
    { key: "year", label: "Year" },
    { key: "college", label: "College" },
    { key: "address", label: "Address" },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <SectionHeader
        title="My Profile"
        subtitle="Manage your academic information and account settings"
        headingColor={headingColor}
        bodyColor={bodyColor}
      />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Student Info card */}
        <div
          className="lg:col-span-2 rounded-2xl p-6"
          style={glassStyle}
          data-ocid="profile.card"
        >
          <div className="flex items-start justify-between mb-6">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-2xl gradient-strip flex items-center justify-center text-white font-bold text-xl">
                {profile.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </div>
              <div>
                <h3
                  className="font-bold text-lg"
                  style={{ color: headingColor }}
                >
                  {profile.name}
                </h3>
                <p className="text-sm" style={{ color: mutedColor }}>
                  {profile.email}
                </p>
                <Badge className="mt-1 text-xs rounded-full gradient-btn text-white border-0 px-2 py-0.5">
                  {profile.course}
                </Badge>
              </div>
            </div>
            {editingProfile ? (
              <button
                type="button"
                data-ocid="profile.save.button"
                onClick={saveProfile}
                className="flex items-center gap-1.5 text-sm font-semibold px-4 py-2 rounded-full gradient-btn text-white"
              >
                <Save size={14} /> Save
              </button>
            ) : (
              <button
                type="button"
                data-ocid="profile.edit.button"
                onClick={() => setEditingProfile(true)}
                className="flex items-center gap-1.5 text-sm font-medium px-4 py-2 rounded-full"
                style={{
                  background: "rgba(255,255,255,0.08)",
                  color: headingColor,
                  border: "1px solid rgba(255,255,255,0.12)",
                }}
              >
                <Edit2 size={14} /> Edit
              </button>
            )}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {fields.map((f) => (
              <div key={f.key}>
                <label
                  htmlFor={f.key}
                  className="text-xs font-medium block mb-1"
                  style={{ color: mutedColor }}
                >
                  {f.label}
                </label>
                {editingProfile ? (
                  <Input
                    data-ocid={`profile.${f.key}.input`}
                    value={editProfile[f.key] ?? ""}
                    onChange={(e) =>
                      setEditProfile({
                        ...editProfile,
                        [f.key]: e.target.value,
                      })
                    }
                    className="rounded-xl text-sm h-9"
                    style={{
                      background: "rgba(255,255,255,0.06)",
                      border: "1px solid rgba(255,255,255,0.12)",
                      color: headingColor,
                    }}
                  />
                ) : (
                  <p
                    className="text-sm font-medium"
                    style={{ color: headingColor }}
                  >
                    {profile[f.key]}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Right column */}
        <div className="space-y-6">
          {/* Account Settings */}
          <div className="rounded-2xl p-5" style={glassStyle}>
            <h3 className="font-bold mb-4" style={{ color: headingColor }}>
              Account Settings
            </h3>
            <div className="space-y-1">
              {[{ icon: Lock, label: "Change Password", action: true }].map(
                (item) => (
                  <button
                    type="button"
                    key={item.label}
                    data-ocid="profile.change_password.button"
                    className="w-full flex items-center justify-between p-3 rounded-xl transition-all hover:bg-white/5"
                  >
                    <div className="flex items-center gap-3">
                      <item.icon size={16} className="text-blue-400" />
                      <span className="text-sm" style={{ color: bodyColor }}>
                        {item.label}
                      </span>
                    </div>
                    <ChevronRight size={14} style={{ color: mutedColor }} />
                  </button>
                ),
              )}
              <div className="flex items-center justify-between p-3 rounded-xl">
                <div className="flex items-center gap-3">
                  <Moon size={16} className="text-purple-400" />
                  <span className="text-sm" style={{ color: bodyColor }}>
                    Dark Mode
                  </span>
                </div>
                <Switch
                  data-ocid="profile.dark_mode.switch"
                  checked={darkMode}
                  onCheckedChange={onDarkMode}
                />
              </div>
              <div className="flex items-center justify-between p-3 rounded-xl">
                <div className="flex items-center gap-3">
                  <Bell size={16} className="text-yellow-400" />
                  <span className="text-sm" style={{ color: bodyColor }}>
                    Notifications
                  </span>
                </div>
                <Switch
                  data-ocid="profile.notifications.switch"
                  checked={notifications}
                  onCheckedChange={setNotifications}
                />
              </div>
              <button
                type="button"
                data-ocid="profile.logout.button"
                className="w-full flex items-center gap-3 p-3 rounded-xl transition-all hover:bg-red-500/10 text-red-400"
              >
                <LogOut size={16} />
                <span className="text-sm font-medium">Logout</span>
              </button>
            </div>
          </div>

          {/* Photo Upload */}
          <div className="rounded-2xl p-5" style={glassStyle}>
            <h3 className="font-bold mb-4" style={{ color: headingColor }}>
              Profile Photo
            </h3>
            <div
              data-ocid="profile.photo.dropzone"
              className="border-2 border-dashed rounded-xl p-6 text-center cursor-pointer transition-all hover:border-blue-400/50"
              style={{ borderColor: "rgba(255,255,255,0.15)" }}
            >
              <div className="w-12 h-12 rounded-full gradient-strip flex items-center justify-center mx-auto mb-3">
                <Camera size={20} className="text-white" />
              </div>
              <p
                className="text-xs font-medium mb-3"
                style={{ color: mutedColor }}
              >
                Click to update profile photo
              </p>
              <div className="flex gap-2 justify-center">
                {[
                  { icon: Camera, label: "Camera" },
                  { icon: Layers, label: "Gallery" },
                  { icon: Upload, label: "Upload" },
                ].map((btn) => (
                  <button
                    type="button"
                    key={btn.label}
                    data-ocid={`profile.photo.${btn.label.toLowerCase()}.button`}
                    className="flex items-center gap-1 text-xs px-3 py-1.5 rounded-full transition-all hover:bg-blue-500/20"
                    style={{
                      background: "rgba(255,255,255,0.06)",
                      color: bodyColor,
                      border: "1px solid rgba(255,255,255,0.10)",
                    }}
                  >
                    <btn.icon size={11} /> {btn.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Notes Section ─────────────────────────────────────────────────────────────
function NotesSection({
  headingColor,
  bodyColor,
  mutedColor,
  glassStyle,
}: {
  headingColor: string;
  bodyColor: string;
  mutedColor: string;
  glassStyle: React.CSSProperties;
}) {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <SectionHeader
        title="Study Materials"
        subtitle="Download notes, assignments, and resources from your teachers"
        headingColor={headingColor}
        bodyColor={bodyColor}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {NOTES.map((note, i) => (
          <motion.div
            key={note.id}
            data-ocid={`notes.item.${i + 1}`}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.08 }}
            className="p-5 rounded-2xl hover:scale-102 transition-transform duration-200"
            style={glassStyle}
          >
            <div className="flex items-start gap-4">
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                style={{
                  background:
                    note.type === "PDF"
                      ? "rgba(239,68,68,0.15)"
                      : "rgba(59,130,246,0.15)",
                  border: `1px solid ${note.type === "PDF" ? "rgba(239,68,68,0.25)" : "rgba(59,130,246,0.25)"}`,
                }}
              >
                <FileText
                  size={20}
                  style={{ color: note.type === "PDF" ? "#F87171" : "#60A5FA" }}
                />
              </div>
              <div className="flex-1 min-w-0">
                <h4
                  className="font-semibold text-sm mb-1 truncate"
                  style={{ color: headingColor }}
                >
                  {note.title}
                </h4>
                <p className="text-xs mb-0.5" style={{ color: "#60A5FA" }}>
                  {note.subject}
                </p>
                <p className="text-xs" style={{ color: mutedColor }}>
                  {note.teacher}
                </p>
              </div>
            </div>
            <div
              className="flex items-center justify-between mt-4 pt-3"
              style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}
            >
              <div className="flex items-center gap-2">
                <Badge variant="secondary" className="text-xs rounded-full">
                  {note.type}
                </Badge>
                <span className="text-xs" style={{ color: mutedColor }}>
                  {note.size}
                </span>
              </div>
              <button
                type="button"
                data-ocid={`notes.download.button.${i + 1}`}
                className="flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full gradient-btn text-white"
              >
                <Download size={12} /> Download
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

// ─── About Section ─────────────────────────────────────────────────────────────
function AboutSection({
  headingColor,
  bodyColor,
  mutedColor,
  glassStyle,
  expandedFAQ,
  setExpandedFAQ,
}: {
  headingColor: string;
  bodyColor: string;
  mutedColor: string;
  glassStyle: React.CSSProperties;
  expandedFAQ: number | null;
  setExpandedFAQ: (v: number | null) => void;
}) {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <SectionHeader
        title="About & Contact"
        subtitle="Learn about EduConnect and get in touch with our team"
        headingColor={headingColor}
        bodyColor={bodyColor}
      />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Overview */}
        <div className="rounded-2xl p-6" style={glassStyle}>
          <div className="w-12 h-12 rounded-xl gradient-strip flex items-center justify-center mb-4">
            <GraduationCap size={22} className="text-white" />
          </div>
          <h3
            className="font-bold text-lg mb-1"
            style={{ color: headingColor }}
          >
            EduConnect
          </h3>
          <p className="text-xs font-medium mb-3 gradient-text">
            Smart Campus, Smart Students
          </p>
          <p
            className="text-sm leading-relaxed mb-4"
            style={{ color: bodyColor }}
          >
            EduConnect is a modern college app that helps students manage
            academic details, connect with teachers, and access study
            resources—all in one place.
          </p>
          <div className="space-y-2 mb-5">
            {[
              "Make student life easy and digital",
              "Improve communication in college",
              "Provide smart learning tools",
            ].map((m) => (
              <div key={m} className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full gradient-strip" />
                <span className="text-sm" style={{ color: bodyColor }}>
                  {m}
                </span>
              </div>
            ))}
          </div>
          <div className="flex items-center gap-3">
            <Badge className="text-xs rounded-full gradient-btn text-white border-0">
              v1.0.0
            </Badge>
            <span className="text-xs" style={{ color: mutedColor }}>
              ABC College of Engineering
            </span>
          </div>
          <div
            className="mt-4 pt-4 border-t"
            style={{ borderColor: "rgba(255,255,255,0.07)" }}
          >
            <p
              className="text-xs font-semibold mb-2"
              style={{ color: mutedColor }}
            >
              Follow Us
            </p>
            <div className="flex gap-3">
              {[
                { icon: Globe, color: "#3B82F6", label: "Website" },
                { icon: Instagram, color: "#E1306C", label: "Instagram" },
                { icon: Linkedin, color: "#0A66C2", label: "LinkedIn" },
              ].map((s) => (
                <button
                  type="button"
                  key={s.label}
                  data-ocid={`about.${s.label.toLowerCase()}.link`}
                  className="w-9 h-9 rounded-full flex items-center justify-center transition-all hover:scale-110"
                  style={{
                    background: `${s.color}20`,
                    border: `1px solid ${s.color}30`,
                  }}
                >
                  <s.icon size={15} style={{ color: s.color }} />
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* FAQs */}
        <div className="rounded-2xl p-6" style={glassStyle}>
          <div className="flex items-center gap-2 mb-5">
            <HelpCircle size={20} className="text-purple-400" />
            <h3 className="font-bold" style={{ color: headingColor }}>
              Frequently Asked Questions
            </h3>
          </div>
          <div className="space-y-2">
            {FAQS.map((faq, i) => (
              <div
                key={faq.question}
                data-ocid={`about.faq.item.${i + 1}`}
                className="rounded-xl overflow-hidden"
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.07)",
                }}
              >
                <button
                  type="button"
                  data-ocid={`about.faq.toggle.${i + 1}`}
                  onClick={() => setExpandedFAQ(expandedFAQ === i ? null : i)}
                  className="w-full flex items-center justify-between p-4 text-left"
                >
                  <span
                    className="text-sm font-medium"
                    style={{ color: headingColor }}
                  >
                    {faq.question}
                  </span>
                  <ChevronDown
                    size={16}
                    style={{
                      color: mutedColor,
                      transform:
                        expandedFAQ === i ? "rotate(180deg)" : "rotate(0deg)",
                      transition: "transform 0.2s",
                    }}
                  />
                </button>
                <AnimatePresence>
                  {expandedFAQ === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden"
                    >
                      <p
                        className="px-4 pb-4 text-sm"
                        style={{ color: bodyColor }}
                      >
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>

        {/* Contact */}
        <div className="rounded-2xl p-6" style={glassStyle}>
          <div className="flex items-center gap-2 mb-5">
            <Mail size={20} className="text-blue-400" />
            <h3 className="font-bold" style={{ color: headingColor }}>
              Contact & Support
            </h3>
          </div>
          <div className="space-y-3 mb-5">
            {[
              {
                icon: Mail,
                label: "support@educonnect.edu",
                sub: "Send us an email",
              },
              {
                icon: Phone,
                label: "+91 11 2345 6789",
                sub: "Mon–Fri, 9 AM–6 PM",
              },
              {
                icon: MapPin,
                label: "ABC College, Sector 5, New Delhi",
                sub: "Open in Google Maps",
              },
            ].map((c) => (
              <div
                key={c.label}
                className="flex items-start gap-3 p-3 rounded-xl"
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.07)",
                }}
              >
                <c.icon size={16} className="text-blue-400 mt-0.5 shrink-0" />
                <div>
                  <p
                    className="text-sm font-medium"
                    style={{ color: headingColor }}
                  >
                    {c.label}
                  </p>
                  <p className="text-xs" style={{ color: mutedColor }}>
                    {c.sub}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="space-y-2 mb-5">
            <button
              type="button"
              data-ocid="about.report_problem.button"
              className="w-full flex items-center gap-3 p-3 rounded-xl transition-all hover:bg-red-500/10"
              style={{ border: "1px solid rgba(239,68,68,0.15)" }}
            >
              <AlertTriangle size={16} className="text-red-400" />
              <span
                className="text-sm font-medium"
                style={{ color: headingColor }}
              >
                Report a Problem
              </span>
            </button>
            <button
              type="button"
              data-ocid="about.send_feedback.button"
              className="w-full flex items-center gap-3 p-3 rounded-xl transition-all hover:bg-blue-500/10"
              style={{ border: "1px solid rgba(59,130,246,0.15)" }}
            >
              <ThumbsUp size={16} className="text-blue-400" />
              <span
                className="text-sm font-medium"
                style={{ color: headingColor }}
              >
                Send Feedback
              </span>
            </button>
          </div>

          <div
            className="pt-4 border-t"
            style={{ borderColor: "rgba(255,255,255,0.07)" }}
          >
            <p
              className="text-xs font-semibold mb-2"
              style={{ color: mutedColor }}
            >
              Developer
            </p>
            <p className="text-sm font-medium" style={{ color: headingColor }}>
              EduConnect Dev Team
            </p>
            <p className="text-xs" style={{ color: mutedColor }}>
              dev@educonnect.edu
            </p>
            <div className="flex gap-3 mt-3">
              <a
                href="https://educonnect.edu"
                className="text-xs hover:text-blue-400 transition-colors"
                style={{ color: mutedColor }}
              >
                Privacy Policy
              </a>
              <span style={{ color: mutedColor }}>·</span>
              <a
                href="https://educonnect.edu"
                className="text-xs hover:text-blue-400 transition-colors"
                style={{ color: mutedColor }}
              >
                Terms
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Section Header helper ─────────────────────────────────────────────────────
function SectionHeader({
  title,
  subtitle,
  headingColor,
  bodyColor,
}: {
  title: string;
  subtitle: string;
  headingColor: string;
  bodyColor: string;
}) {
  return (
    <div className="mb-10">
      <h2 className="text-3xl font-bold mb-2" style={{ color: headingColor }}>
        <span className="gradient-text">{title}</span>
      </h2>
      <p className="text-base" style={{ color: bodyColor }}>
        {subtitle}
      </p>
    </div>
  );
}
