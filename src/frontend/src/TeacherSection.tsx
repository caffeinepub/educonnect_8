import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  ArrowLeft,
  Award,
  BarChart3,
  Bell,
  BookOpen,
  Calendar,
  Download,
  Eye,
  FileText,
  GraduationCap,
  Mail,
  MessageCircle,
  Phone,
  Play,
  Search,
  Send,
  Star,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useRef, useState } from "react";

// ─── Raw teacher data ──────────────────────────────────────────────────────────
const RAW_TEACHERS = [
  {
    id: 1,
    name: "Dr. Sumitra Meena",
    subject: "Principal",
    role: "Principal",
    prefix: "Dr.",
  },
  {
    id: 2,
    name: "Sh. Chandra Shekhar Meena",
    subject: "Chemistry",
    role: "Associate Professor",
    prefix: "Sh.",
  },
  {
    id: 3,
    name: "Sh. Rakesh Kumar Dubey",
    subject: "Chemistry",
    role: "Assistant Professor",
    prefix: "Sh.",
  },
  {
    id: 4,
    name: "Smt. Urmila Meena",
    subject: "Chemistry",
    role: "Assistant Professor",
    prefix: "Smt.",
  },
  {
    id: 5,
    name: "Sh. Vijendra Kumar Meena",
    subject: "Chemistry",
    role: "Lecturer",
    prefix: "Sh.",
  },
  {
    id: 6,
    name: "Sh. Pradhan Singh Meena",
    subject: "Mathematics",
    role: "Associate Professor",
    prefix: "Sh.",
  },
  {
    id: 7,
    name: "Sh. Mahendra Kumar Meena",
    subject: "Botany",
    role: "Assistant Professor",
    prefix: "Sh.",
  },
  {
    id: 8,
    name: "Dr. Sunil Kumar Meena",
    subject: "Zoology",
    role: "Associate Professor",
    prefix: "Dr.",
  },
  {
    id: 9,
    name: "Smt. Shalu Kanwat",
    subject: "Zoology",
    role: "Assistant Professor",
    prefix: "Smt.",
  },
  {
    id: 10,
    name: "Sh. Kallan Singh Meena",
    subject: "Political Science",
    role: "Associate Professor",
    prefix: "Sh.",
  },
  {
    id: 11,
    name: "Sh. Dharmveer Meena",
    subject: "Political Science",
    role: "Lecturer",
    prefix: "Sh.",
  },
  {
    id: 12,
    name: "Dr. Rohit Kumar Meena",
    subject: "Political Science",
    role: "Associate Professor",
    prefix: "Dr.",
  },
  {
    id: 13,
    name: "Dr. Satish Kumar Meena",
    subject: "Political Science",
    role: "Assistant Professor",
    prefix: "Dr.",
  },
  {
    id: 14,
    name: "Sh. Mahendra Kumar Sharma",
    subject: "Political Science",
    role: "Lecturer",
    prefix: "Sh.",
  },
  {
    id: 15,
    name: "Sh. Gangaram Meena",
    subject: "Hindi Literature",
    role: "Associate Professor",
    prefix: "Sh.",
  },
  {
    id: 16,
    name: "Sh. Dinesh Kumar Meena",
    subject: "Hindi Literature",
    role: "Assistant Professor",
    prefix: "Sh.",
  },
  {
    id: 17,
    name: "Dr. Arvind Kumar Dixit",
    subject: "Hindi Literature",
    role: "Associate Professor",
    prefix: "Dr.",
  },
  {
    id: 18,
    name: "Dr. Ashok Kumar Sharma",
    subject: "Hindi Literature",
    role: "Professor",
    prefix: "Dr.",
  },
  {
    id: 19,
    name: "Sh. Dharmraj Meena",
    subject: "History",
    role: "Assistant Professor",
    prefix: "Sh.",
  },
  {
    id: 20,
    name: "Dr. Pinky Meena",
    subject: "History",
    role: "Associate Professor",
    prefix: "Dr.",
  },
  {
    id: 21,
    name: "Sh. Ramkesh Meena",
    subject: "Sanskrit",
    role: "Lecturer",
    prefix: "Sh.",
  },
  {
    id: 22,
    name: "Sh. Suresh Chand Meena",
    subject: "Sanskrit",
    role: "Assistant Professor",
    prefix: "Sh.",
  },
  {
    id: 23,
    name: "Dr. Gunjan Garg",
    subject: "Sanskrit",
    role: "Associate Professor",
    prefix: "Dr.",
  },
  {
    id: 24,
    name: "Dr. Mahendra Kumar Meena",
    subject: "Sanskrit",
    role: "Professor",
    prefix: "Dr.",
  },
  {
    id: 25,
    name: "Miss Abha Agarwal",
    subject: "Economics",
    role: "Assistant Professor",
    prefix: "Miss",
  },
  {
    id: 26,
    name: "Sh. Kailash Bairwa",
    subject: "Sociology",
    role: "Assistant Professor",
    prefix: "Sh.",
  },
  {
    id: 27,
    name: "Miss Pinky Meena",
    subject: "English Literature",
    role: "Lecturer",
    prefix: "Miss",
  },
  {
    id: 28,
    name: "Smt. Premlata Meena",
    subject: "English Literature",
    role: "Assistant Professor",
    prefix: "Smt.",
  },
  {
    id: 29,
    name: "Sh. Ramnaresh Meena",
    subject: "Physics",
    role: "Associate Professor",
    prefix: "Sh.",
  },
  {
    id: 30,
    name: "Sh. Chetan Prakash Meena",
    subject: "Physics",
    role: "Assistant Professor",
    prefix: "Sh.",
  },
  {
    id: 31,
    name: "Sh. Tejram Meena",
    subject: "ABST",
    role: "Assistant Professor",
    prefix: "Sh.",
  },
  {
    id: 32,
    name: "Sh. Mahender Singh Meena",
    subject: "ABST",
    role: "Lecturer",
    prefix: "Sh.",
  },
  {
    id: 33,
    name: "Sh. Ramesh Chand Sharma",
    subject: "ABST",
    role: "Associate Professor",
    prefix: "Sh.",
  },
  {
    id: 34,
    name: "Sh. Raju Lal Meena",
    subject: "Physical Education",
    role: "Assistant Professor",
    prefix: "Sh.",
  },
];

// ─── Derived teacher data ──────────────────────────────────────────────────────
function getAvatarUrl(name: string) {
  return `https://api.dicebear.com/7.x/initials/svg?seed=${encodeURIComponent(name)}&backgroundColor=4f46e5,7c3aed,2563eb,0891b2&backgroundType=gradientLinear`;
}

function getTeacherExtras(t: { id: number; name: string }) {
  const id = t.id;
  const rawRating = 4 + (id % 10) / 10;
  const rating = Math.min(5.0, rawRating);
  const experience = 3 + (id % 13);
  const phone = `+91 9${String(id).padStart(1, "0")}00 ${String(((id * 7654) % 90000) + 10000)}`;
  const firstName = t.name.split(" ")[1]?.toLowerCase() || "teacher";
  const email = `${firstName}${id}@educonnect.ac.in`;
  return { rating, experience, phone, email };
}

interface Teacher {
  id: number;
  name: string;
  subject: string;
  role: string;
  prefix: string;
  avatar: string;
  rating: number;
  experience: number;
  phone: string;
  email: string;
}

const TEACHERS: Teacher[] = RAW_TEACHERS.map((t) => ({
  ...t,
  avatar: getAvatarUrl(t.name),
  ...getTeacherExtras(t),
}));

const SUBJECTS = [
  "All",
  ...Array.from(new Set(RAW_TEACHERS.map((t) => t.subject))),
];

const SUBJECT_COLORS: Record<string, string> = {
  Principal: "#f59e0b",
  Chemistry: "#10b981",
  Mathematics: "#3b82f6",
  Botany: "#22c55e",
  Zoology: "#8b5cf6",
  "Political Science": "#ef4444",
  "Hindi Literature": "#f97316",
  History: "#eab308",
  Sanskrit: "#06b6d4",
  Economics: "#ec4899",
  Sociology: "#a855f7",
  "English Literature": "#14b8a6",
  Physics: "#6366f1",
  ABST: "#f43f5e",
  "Physical Education": "#84cc16",
};

// ─── Mock chat messages ────────────────────────────────────────────────────────
const MOCK_CHAT = [
  {
    id: 1,
    sender: "teacher" as const,
    text: "Hello! Do you have any questions about today's lecture?",
    time: "10:02 AM",
  },
  {
    id: 2,
    sender: "student" as const,
    text: "Yes sir, I need some clarification on the last topic.",
    time: "10:05 AM",
  },
  {
    id: 3,
    sender: "teacher" as const,
    text: "Great question! I'll upload additional notes by tonight. Please check the Notes tab.",
    time: "10:07 AM",
  },
  {
    id: 4,
    sender: "student" as const,
    text: "Thank you so much, sir!",
    time: "10:08 AM",
  },
];

// ─── Sub-components ────────────────────────────────────────────────────────────
function StarRating({ rating, size = 13 }: { rating: number; size?: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((s) => (
        <Star
          key={s}
          size={size}
          style={{
            fill: s <= Math.floor(rating) ? "#fbbf24" : "rgba(251,191,36,0.2)",
            color: s <= Math.floor(rating) ? "#fbbf24" : "rgba(251,191,36,0.3)",
          }}
        />
      ))}
      <span className="ml-1 text-xs font-semibold" style={{ color: "#fbbf24" }}>
        {rating.toFixed(1)}
      </span>
    </div>
  );
}

function SubjectBadge({ subject }: { subject: string }) {
  const color = SUBJECT_COLORS[subject] || "#6366f1";
  return (
    <span
      className="inline-block text-xs font-semibold px-2.5 py-0.5 rounded-full"
      style={{
        background: `${color}22`,
        color,
        border: `1px solid ${color}44`,
      }}
    >
      {subject}
    </span>
  );
}

function AttendanceRing({ value }: { value: number }) {
  const radius = 36;
  const circ = 2 * Math.PI * radius;
  const offset = circ - (value / 100) * circ;
  return (
    <div className="flex flex-col items-center">
      <div className="relative w-24 h-24">
        <svg
          width="96"
          height="96"
          className="-rotate-90"
          aria-label="Attendance ring"
        >
          <title>Attendance</title>
          <circle
            cx="48"
            cy="48"
            r={radius}
            strokeWidth="8"
            stroke="rgba(255,255,255,0.08)"
            fill="none"
          />
          <circle
            cx="48"
            cy="48"
            r={radius}
            strokeWidth="8"
            stroke="url(#ring-grad)"
            fill="none"
            strokeDasharray={circ}
            strokeDashoffset={offset}
            strokeLinecap="round"
          />
          <defs>
            <linearGradient id="ring-grad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#2563eb" />
              <stop offset="100%" stopColor="#7c3aed" />
            </linearGradient>
          </defs>
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-xl font-bold text-white">{value}%</span>
        </div>
      </div>
      <p className="text-xs mt-1" style={{ color: "#7E89A8" }}>
        Attendance
      </p>
    </div>
  );
}

function GradProgressBar({
  label,
  value,
  color,
}: { label: string; value: number; color: string }) {
  return (
    <div className="mb-4">
      <div className="flex justify-between mb-1.5">
        <span className="text-sm" style={{ color: "#AEB6D0" }}>
          {label}
        </span>
        <span className="text-sm font-semibold text-white">{value}%</span>
      </div>
      <div
        className="w-full h-2.5 rounded-full"
        style={{ background: "rgba(255,255,255,0.08)" }}
      >
        <motion.div
          className="h-2.5 rounded-full"
          style={{ background: `linear-gradient(90deg, #2563eb, ${color})` }}
          initial={{ width: 0 }}
          animate={{ width: `${value}%` }}
          transition={{ duration: 1, ease: "easeOut" }}
        />
      </div>
    </div>
  );
}

// ─── Teacher Profile Screen ────────────────────────────────────────────────────
function TeacherProfile({
  teacher,
  onBack,
  darkMode,
}: {
  teacher: Teacher;
  onBack: () => void;
  darkMode: boolean;
}) {
  const [chatMessages, setChatMessages] = useState(MOCK_CHAT);
  const [chatInput, setChatInput] = useState("");
  const chatEndRef = useRef<HTMLDivElement>(null);

  const attendance = 75 + (teacher.id % 20);
  const marks = 65 + (teacher.id % 30);
  const assignments = 70 + (teacher.id % 25);

  function sendMessage() {
    if (!chatInput.trim()) return;
    const msg = {
      id: chatMessages.length + 1,
      sender: "student" as const,
      text: chatInput,
      time: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
    };
    setChatMessages((prev) => [...prev, msg]);
    setChatInput("");
    setTimeout(() => {
      const reply = {
        id: chatMessages.length + 2,
        sender: "teacher" as const,
        text: "Thanks for your message! I will get back to you shortly.",
        time: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
      };
      setChatMessages((prev) => [...prev, reply]);
      chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 1000);
  }

  const cardBg = darkMode ? "rgba(255,255,255,0.05)" : "rgba(255,255,255,0.8)";
  const cardBorder = darkMode
    ? "rgba(255,255,255,0.08)"
    : "rgba(100,120,200,0.15)";
  const textBody = darkMode ? "#AEB6D0" : "#3a4272";

  return (
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 40 }}
      transition={{ duration: 0.3 }}
      className="max-w-lg mx-auto"
      data-ocid="teacher.profile.panel"
    >
      {/* Gradient Header */}
      <div
        className="relative rounded-3xl overflow-hidden mb-0"
        style={{
          background: "linear-gradient(135deg, #2563eb 0%, #7c3aed 100%)",
          minHeight: 200,
        }}
      >
        {/* Ambient decoration */}
        <div
          style={{
            position: "absolute",
            top: -40,
            right: -40,
            width: 180,
            height: 180,
            borderRadius: "50%",
            background: "rgba(255,255,255,0.06)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -20,
            left: -20,
            width: 120,
            height: 120,
            borderRadius: "50%",
            background: "rgba(255,255,255,0.04)",
          }}
        />

        {/* Back button */}
        <button
          type="button"
          data-ocid="teacher.profile.back.button"
          onClick={onBack}
          className="absolute top-4 left-4 z-10 w-9 h-9 rounded-full flex items-center justify-center"
          style={{
            background: "rgba(255,255,255,0.18)",
            border: "1px solid rgba(255,255,255,0.25)",
          }}
        >
          <ArrowLeft size={17} className="text-white" />
        </button>

        {/* Avatar + name */}
        <div className="flex flex-col items-center justify-center pt-10 pb-8 px-6 text-center relative z-10">
          <div
            className="w-24 h-24 rounded-full overflow-hidden border-4 mb-3"
            style={{
              borderColor: "rgba(255,255,255,0.4)",
              boxShadow: "0 8px 32px rgba(0,0,0,0.3)",
            }}
          >
            <img
              src={teacher.avatar}
              alt={teacher.name}
              className="w-full h-full object-cover"
            />
          </div>
          <h2 className="text-xl font-bold text-white mb-1">{teacher.name}</h2>
          <p className="text-sm text-white/80 mb-2">{teacher.role}</p>
          <StarRating rating={teacher.rating} size={14} />
        </div>
      </div>

      {/* Tabs */}
      <Tabs defaultValue="info" className="mt-4">
        <TabsList
          className="w-full rounded-2xl p-1 mb-4 grid grid-cols-5"
          style={{
            background: darkMode
              ? "rgba(255,255,255,0.07)"
              : "rgba(99,102,241,0.08)",
            border: `1px solid ${cardBorder}`,
          }}
          data-ocid="teacher.profile.tab"
        >
          {["info", "notes", "chat", "performance", "notifications"].map(
            (tab) => (
              <TabsTrigger
                key={tab}
                value={tab}
                className="rounded-xl text-xs capitalize data-[state=active]:text-white data-[state=active]:shadow-md"
                style={{
                  fontSize: "10px",
                }}
                data-ocid={`teacher.profile.${tab}.tab`}
              >
                {tab === "notifications"
                  ? "Alerts"
                  : tab.charAt(0).toUpperCase() + tab.slice(1)}
              </TabsTrigger>
            ),
          )}
        </TabsList>

        {/* INFO TAB */}
        <TabsContent value="info" className="mt-0">
          <div className="space-y-3">
            {[
              { icon: Phone, label: "Phone", value: teacher.phone },
              { icon: Mail, label: "Email", value: teacher.email },
              {
                icon: Award,
                label: "Experience",
                value: `${teacher.experience} years`,
              },
              { icon: BookOpen, label: "Subject", value: teacher.subject },
              { icon: GraduationCap, label: "Role", value: teacher.role },
            ].map((item) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-3 p-3.5 rounded-2xl"
                style={{
                  background: cardBg,
                  border: `1px solid ${cardBorder}`,
                }}
              >
                <div
                  className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0"
                  style={{
                    background: "linear-gradient(135deg, #2563eb22, #7c3aed22)",
                  }}
                >
                  <item.icon size={16} style={{ color: "#7c3aed" }} />
                </div>
                <div>
                  <p className="text-xs" style={{ color: textBody }}>
                    {item.label}
                  </p>
                  <p
                    className="text-sm font-semibold"
                    style={{ color: darkMode ? "#F2F5FF" : "#1e2656" }}
                  >
                    {item.value}
                  </p>
                </div>
              </motion.div>
            ))}

            {/* Intro Video Placeholder */}
            <div
              className="rounded-2xl overflow-hidden relative"
              style={{ background: cardBg, border: `1px solid ${cardBorder}` }}
              data-ocid="teacher.profile.canvas_target"
            >
              <div
                className="h-44 flex flex-col items-center justify-center gap-3"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(37,99,235,0.12), rgba(124,58,237,0.12))",
                }}
              >
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center"
                  style={{
                    background: "linear-gradient(135deg, #2563eb, #7c3aed)",
                    boxShadow: "0 8px 24px rgba(124,58,237,0.4)",
                  }}
                >
                  <Play size={22} className="text-white ml-1" />
                </div>
                <div className="text-center">
                  <p
                    className="text-sm font-semibold"
                    style={{ color: darkMode ? "#F2F5FF" : "#1e2656" }}
                  >
                    Intro Video
                  </p>
                  <p className="text-xs" style={{ color: textBody }}>
                    Coming Soon
                  </p>
                </div>
              </div>
            </div>
          </div>
        </TabsContent>

        {/* NOTES TAB */}
        <TabsContent value="notes" className="mt-0">
          <div className="space-y-3" data-ocid="teacher.notes.list">
            {[
              {
                title: "Unit 1 Notes.pdf",
                type: "PDF",
                size: "2.4 MB",
                color: "#ef4444",
              },
              {
                title: "Assignment 2.docx",
                type: "DOC",
                size: "1.1 MB",
                color: "#3b82f6",
              },
              {
                title: `${teacher.subject} Formula Sheet.pdf`,
                type: "PDF",
                size: "980 KB",
                color: "#ef4444",
              },
            ].map((file, i) => (
              <motion.div
                key={file.title}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="flex items-center justify-between p-4 rounded-2xl"
                style={{
                  background: cardBg,
                  border: `1px solid ${cardBorder}`,
                }}
                data-ocid={`teacher.notes.item.${i + 1}`}
              >
                <div className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center"
                    style={{
                      background: `${file.color}18`,
                      border: `1px solid ${file.color}33`,
                    }}
                  >
                    <FileText size={18} style={{ color: file.color }} />
                  </div>
                  <div>
                    <p
                      className="text-sm font-semibold"
                      style={{ color: darkMode ? "#F2F5FF" : "#1e2656" }}
                    >
                      {file.title}
                    </p>
                    <p className="text-xs" style={{ color: textBody }}>
                      {file.type} · {file.size}
                    </p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <button
                    type="button"
                    data-ocid={`teacher.notes.view.button.${i + 1}`}
                    className="flex items-center gap-1 text-xs font-medium px-2.5 py-1.5 rounded-full"
                    style={{
                      background: "rgba(37,99,235,0.12)",
                      color: "#3b82f6",
                      border: "1px solid rgba(37,99,235,0.25)",
                    }}
                  >
                    <Eye size={11} /> View
                  </button>
                  <button
                    type="button"
                    data-ocid={`teacher.notes.download.button.${i + 1}`}
                    className="flex items-center gap-1 text-xs font-medium px-2.5 py-1.5 rounded-full"
                    style={{
                      background: "rgba(124,58,237,0.12)",
                      color: "#7c3aed",
                      border: "1px solid rgba(124,58,237,0.25)",
                    }}
                  >
                    <Download size={11} /> Download
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </TabsContent>

        {/* CHAT TAB */}
        <TabsContent value="chat" className="mt-0">
          <div
            className="rounded-2xl overflow-hidden"
            style={{ background: cardBg, border: `1px solid ${cardBorder}` }}
            data-ocid="teacher.chat.panel"
          >
            {/* Chat header */}
            <div
              className="flex items-center gap-3 p-4"
              style={{
                borderBottom: `1px solid ${cardBorder}`,
                background: "linear-gradient(135deg, #2563eb0a, #7c3aed0a)",
              }}
            >
              <div className="w-9 h-9 rounded-full overflow-hidden">
                <img
                  src={teacher.avatar}
                  alt={teacher.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <p
                  className="text-sm font-semibold"
                  style={{ color: darkMode ? "#F2F5FF" : "#1e2656" }}
                >
                  {teacher.name}
                </p>
                <p className="text-xs" style={{ color: "#22c55e" }}>
                  ● Online
                </p>
              </div>
            </div>

            {/* Messages */}
            <ScrollArea className="h-56 p-4">
              <div className="space-y-3">
                {chatMessages.map((msg) => (
                  <div
                    key={msg.id}
                    className={`flex ${msg.sender === "student" ? "justify-end" : "justify-start"}`}
                  >
                    <div
                      className="max-w-[75%] px-3.5 py-2.5 rounded-2xl"
                      style={{
                        background:
                          msg.sender === "student"
                            ? "linear-gradient(135deg, #2563eb, #3b82f6)"
                            : darkMode
                              ? "rgba(255,255,255,0.08)"
                              : "rgba(99,102,241,0.1)",
                        borderTopRightRadius: msg.sender === "student" ? 4 : 16,
                        borderTopLeftRadius: msg.sender === "teacher" ? 4 : 16,
                      }}
                    >
                      <p
                        className="text-sm"
                        style={{
                          color:
                            msg.sender === "student"
                              ? "#fff"
                              : darkMode
                                ? "#F2F5FF"
                                : "#1e2656",
                        }}
                      >
                        {msg.text}
                      </p>
                      <p
                        className="text-right mt-1"
                        style={{
                          fontSize: 10,
                          color:
                            msg.sender === "student"
                              ? "rgba(255,255,255,0.65)"
                              : textBody,
                        }}
                      >
                        {msg.time}
                      </p>
                    </div>
                  </div>
                ))}
                <div ref={chatEndRef} />
              </div>
            </ScrollArea>

            {/* Input */}
            <div
              className="flex gap-2 p-3"
              style={{ borderTop: `1px solid ${cardBorder}` }}
            >
              <Input
                data-ocid="teacher.chat.input"
                value={chatInput}
                onChange={(e) => setChatInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                placeholder="Type a message..."
                className="flex-1 text-sm rounded-full"
                style={{
                  background: darkMode
                    ? "rgba(255,255,255,0.06)"
                    : "rgba(99,102,241,0.06)",
                  border: `1px solid ${cardBorder}`,
                  color: darkMode ? "#F2F5FF" : "#1e2656",
                }}
              />
              <Button
                data-ocid="teacher.chat.send.button"
                onClick={sendMessage}
                className="rounded-full w-9 h-9 p-0"
                style={{
                  background: "linear-gradient(135deg, #2563eb, #7c3aed)",
                }}
              >
                <Send size={14} className="text-white" />
              </Button>
            </div>
          </div>
        </TabsContent>

        {/* PERFORMANCE TAB */}
        <TabsContent value="performance" className="mt-0">
          <div className="space-y-4" data-ocid="teacher.performance.panel">
            {/* Attendance ring */}
            <div
              className="p-5 rounded-2xl flex items-center justify-around"
              style={{ background: cardBg, border: `1px solid ${cardBorder}` }}
            >
              <AttendanceRing value={attendance} />
              <div className="text-center">
                <p
                  className="text-3xl font-bold"
                  style={{
                    background: "linear-gradient(135deg, #2563eb, #7c3aed)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  {marks}%
                </p>
                <p className="text-xs" style={{ color: textBody }}>
                  Avg. Marks
                </p>
              </div>
              <div className="text-center">
                <p
                  className="text-3xl font-bold"
                  style={{
                    background: "linear-gradient(135deg, #7c3aed, #ec4899)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  {assignments}%
                </p>
                <p className="text-xs" style={{ color: textBody }}>
                  Assignments
                </p>
              </div>
            </div>

            {/* Progress bars */}
            <div
              className="p-5 rounded-2xl"
              style={{ background: cardBg, border: `1px solid ${cardBorder}` }}
            >
              <p
                className="text-sm font-semibold mb-4"
                style={{ color: darkMode ? "#F2F5FF" : "#1e2656" }}
              >
                Subject Performance
              </p>
              <GradProgressBar
                label="Attendance"
                value={attendance}
                color="#7c3aed"
              />
              <GradProgressBar
                label="Average Marks"
                value={marks}
                color="#ec4899"
              />
              <GradProgressBar
                label="Assignments Completed"
                value={assignments}
                color="#06b6d4"
              />
            </div>

            {/* Stats grid */}
            <div className="grid grid-cols-3 gap-3">
              {[
                {
                  icon: Calendar,
                  label: "Classes",
                  value: `${32 + (teacher.id % 10)}`,
                },
                {
                  icon: BookOpen,
                  label: "Topics",
                  value: `${8 + (teacher.id % 6)}`,
                },
                {
                  icon: BarChart3,
                  label: "Rank",
                  value: `#${(teacher.id % 15) + 1}`,
                },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="p-3 rounded-2xl text-center"
                  style={{
                    background: cardBg,
                    border: `1px solid ${cardBorder}`,
                  }}
                >
                  <stat.icon
                    size={18}
                    style={{ color: "#7c3aed", margin: "0 auto 4px" }}
                  />
                  <p
                    className="text-lg font-bold"
                    style={{ color: darkMode ? "#F2F5FF" : "#1e2656" }}
                  >
                    {stat.value}
                  </p>
                  <p className="text-xs" style={{ color: textBody }}>
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </TabsContent>

        {/* NOTIFICATIONS TAB */}
        <TabsContent value="notifications" className="mt-0">
          <div className="space-y-3" data-ocid="teacher.notifications.list">
            {[
              {
                icon: BookOpen,
                title: "New Assignment Posted",
                desc: `${teacher.subject} – Unit 3 assignment due next Friday`,
                time: "2 hours ago",
                color: "#2563eb",
                tag: "Assignment",
              },
              {
                icon: Bell,
                title: "Exam Alert",
                desc: "Mid-term examination scheduled for next week. Please prepare accordingly.",
                time: "Yesterday",
                color: "#ef4444",
                tag: "Exam",
              },
              {
                icon: MessageCircle,
                title: "Announcement",
                desc: "College will remain closed on Friday due to a public holiday.",
                time: "2 days ago",
                color: "#f59e0b",
                tag: "Notice",
              },
              {
                icon: GraduationCap,
                title: "Seminar Invitation",
                desc: `Guest lecture on ${teacher.subject} by an industry expert next Monday.`,
                time: "3 days ago",
                color: "#7c3aed",
                tag: "Event",
              },
            ].map((notif, i) => (
              <motion.div
                key={notif.title}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
                className="p-4 rounded-2xl"
                style={{
                  background: cardBg,
                  border: `1px solid ${cardBorder}`,
                }}
                data-ocid={`teacher.notifications.item.${i + 1}`}
              >
                <div className="flex items-start gap-3">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 mt-0.5"
                    style={{
                      background: `${notif.color}18`,
                      border: `1px solid ${notif.color}33`,
                    }}
                  >
                    <notif.icon size={18} style={{ color: notif.color }} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <p
                        className="text-sm font-semibold"
                        style={{ color: darkMode ? "#F2F5FF" : "#1e2656" }}
                      >
                        {notif.title}
                      </p>
                      <span
                        className="text-xs px-2 py-0.5 rounded-full"
                        style={{
                          background: `${notif.color}18`,
                          color: notif.color,
                        }}
                      >
                        {notif.tag}
                      </span>
                    </div>
                    <p
                      className="text-xs leading-relaxed mb-2"
                      style={{ color: textBody }}
                    >
                      {notif.desc}
                    </p>
                    <p className="text-xs" style={{ color: "#7E89A8" }}>
                      {notif.time}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </motion.div>
  );
}

// ─── Teacher List Screen ───────────────────────────────────────────────────────
export default function TeacherSection({ darkMode }: { darkMode: boolean }) {
  const [search, setSearch] = useState("");
  const [subject, setSubject] = useState("All");
  const [selected, setSelected] = useState<Teacher | null>(null);

  const glassBg = darkMode
    ? "rgba(255,255,255,0.05)"
    : "rgba(255,255,255,0.75)";
  const glassBorder = darkMode
    ? "rgba(255,255,255,0.09)"
    : "rgba(100,120,200,0.18)";
  const headingColor = darkMode ? "#F2F5FF" : "#1e2656";
  const bodyColor = darkMode ? "#AEB6D0" : "#3a4272";

  const filtered = TEACHERS.filter((t) => {
    const matchName = t.name.toLowerCase().includes(search.toLowerCase());
    const matchSubject = subject === "All" || t.subject === subject;
    return matchName && matchSubject;
  });

  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      <AnimatePresence mode="wait">
        {selected ? (
          <TeacherProfile
            key="profile"
            teacher={selected}
            onBack={() => setSelected(null)}
            darkMode={darkMode}
          />
        ) : (
          <motion.div
            key="list"
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -40 }}
            transition={{ duration: 0.3 }}
          >
            {/* Header */}
            <div className="mb-6">
              <h2
                className="text-2xl font-bold mb-1"
                style={{ color: headingColor }}
              >
                Our Faculty
              </h2>
              <p className="text-sm" style={{ color: bodyColor }}>
                {filtered.length} of {TEACHERS.length} teachers
              </p>
            </div>

            {/* Search */}
            <div className="relative mb-4">
              <Search
                size={16}
                className="absolute left-3.5 top-1/2 -translate-y-1/2"
                style={{ color: "#7c3aed" }}
              />
              <Input
                data-ocid="teachers.search.input"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search teachers by name..."
                className="pl-10 rounded-2xl text-sm"
                style={{
                  background: glassBg,
                  border: `1px solid ${glassBorder}`,
                  color: headingColor,
                }}
              />
            </div>

            {/* Subject filter chips */}
            <div className="flex flex-wrap gap-2 mb-6">
              {SUBJECTS.map((s) => (
                <button
                  type="button"
                  key={s}
                  data-ocid={`teachers.filter.${s.toLowerCase().replace(/\s+/g, "_")}.toggle`}
                  onClick={() => setSubject(s)}
                  className="text-xs font-medium px-3 py-1.5 rounded-full transition-all duration-200"
                  style={{
                    background:
                      subject === s
                        ? "linear-gradient(135deg, #2563eb, #7c3aed)"
                        : glassBg,
                    color: subject === s ? "#fff" : bodyColor,
                    border: subject === s ? "none" : `1px solid ${glassBorder}`,
                    boxShadow:
                      subject === s
                        ? "0 4px 12px rgba(124,58,237,0.3)"
                        : "none",
                  }}
                >
                  {s}
                </button>
              ))}
            </div>

            {/* Teacher list */}
            {filtered.length === 0 ? (
              <div
                data-ocid="teachers.empty_state"
                className="text-center py-16"
                style={{ color: bodyColor }}
              >
                <GraduationCap size={48} className="mx-auto mb-4 opacity-30" />
                <p className="text-base font-medium">No teachers found</p>
                <p className="text-sm">Try adjusting your search or filter</p>
              </div>
            ) : (
              <div className="space-y-3">
                {filtered.map((t, i) => (
                  <motion.div
                    key={t.id}
                    data-ocid={`teachers.item.${i + 1}`}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: Math.min(i * 0.04, 0.5) }}
                    className="flex items-center gap-4 p-4 rounded-2xl hover:scale-[1.01] transition-transform duration-200 cursor-pointer"
                    style={{
                      background: glassBg,
                      border: `1px solid ${glassBorder}`,
                      boxShadow: "0 4px 20px rgba(99,102,241,0.08)",
                    }}
                    onClick={() => setSelected(t)}
                  >
                    {/* Avatar */}
                    <div
                      className="w-16 h-16 rounded-full overflow-hidden shrink-0"
                      style={{
                        border: "2px solid rgba(124,58,237,0.3)",
                        boxShadow: "0 4px 16px rgba(124,58,237,0.2)",
                      }}
                    >
                      <img
                        src={t.avatar}
                        alt={t.name}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>

                    {/* Info */}
                    <div className="flex-1 min-w-0">
                      <p
                        className="font-bold text-sm mb-0.5 truncate"
                        style={{ color: headingColor }}
                      >
                        {t.name}
                      </p>
                      <SubjectBadge subject={t.subject} />
                      <p className="text-xs mt-1" style={{ color: bodyColor }}>
                        {t.role}
                      </p>
                      <div className="mt-1.5">
                        <StarRating rating={t.rating} />
                      </div>
                    </div>

                    {/* View profile */}
                    <button
                      type="button"
                      data-ocid={`teachers.view_profile.button.${i + 1}`}
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelected(t);
                      }}
                      className="shrink-0 px-3 py-2 rounded-full text-xs font-semibold text-white"
                      style={{
                        background: "linear-gradient(135deg, #2563eb, #7c3aed)",
                        boxShadow: "0 4px 12px rgba(124,58,237,0.3)",
                      }}
                    >
                      View Profile
                    </button>
                  </motion.div>
                ))}
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
