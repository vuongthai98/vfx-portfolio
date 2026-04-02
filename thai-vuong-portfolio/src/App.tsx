/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useRef, useEffect } from 'react';
import { Mail, Phone, MapPin, Instagram, Youtube, Facebook, ExternalLink, Cat, Dog, Heart, Bone, ChevronLeft, ChevronRight, Languages, Play, ArrowUpRight } from 'lucide-react';

import { motion, AnimatePresence, useScroll, useTransform, useMotionValue, animate, useInView } from "motion/react";

const translations = {
  en: {
    nav: {
      home: "Home",
      projects: "Projects",
      about: "About",
      experience: "Experience",
      contact: "Contact",
      portfolio: "Portfolio"
    },
    hero: {
      roles: ["VFX Compositor", "Editor", "Storyteller"],
      description: "Passionate about Visual Effects, Storytelling, Filming, Editing, Photography and Producing video content.",
      father: "Father of a",
      and: "and a",
      explore: "Explore Work"
    },
    about: {
      title: "About Me",
      description: "I am a VFX Compositor and Video Editor based in Hanoi. With a background in Aeronautical Engineering, I bring a technical mindset to creative storytelling. I'm passionate about creating seamless visual experiences and telling compelling stories.",
      location: "Ha Noi",
      profileSubtitle: "28 | Scorpio | Cinephile"
    },
    skills: {
      title: "Technical Skills",
      subtitle: "The tools and technologies I use to bring visions to life.",
      mastery: "Mastery"
    },
    projects: {
      title: "Featured Work",
      subtitle: "A selection of recent projects and visual experiments.",
      behance: "View all on Behance",
      data: [
        {
          title: "Mưa Đỏ (2025)",
          category: "VFX Compositing",
          image: "https://bcp.cdnchinhphu.vn/334894974524682240/2025/11/23/5320458781221940676663682014244556147326010710n-1763867996083893343946.jpg",
          description: "Advanced visual effects and compositing for the 2025 project 'Mưa Đỏ', focusing on atmospheric effects and seamless integration."
        },
        {
          title: "VFX LIGHT SHOP (2024)",
          category: "VFX / Lighting",
          image: "https://kenh14cdn.com/203336854389633024/2024/12/20/disney-light-shop-main-poster-premieres-december-4-v0-ytqbof5pq81e1-scaled-1734683145545-17346831466441196878154-1734685247780-17346852483462025169713.jpg",
          description: "Specialized VFX work for 'Light Shop', featuring complex lighting effects and digital environment enhancement."
        },
        {
          title: "SƠN TÙNG M-TP - CHÚNG TA CỦA TƯƠNG LAI",
          category: "Digital Compositing",
          image: "https://i.ytimg.com/vi/8bX-85G1Xm4/maxresdefault.jpg",
          description: "High-end compositing for the hit music video, including complex green screen removal and cinematic visual storytelling."
        },
        {
          title: "ĐẤT RỪNG PHƯƠNG NAM (VFX 2023)",
          category: "VFX Compositing",
          image: "https://iguov8nhvyobj.vcdn.cloud/media/catalog/product/cache/1/small_image/600x314/a134659ca47b28f7b266e1777fbf870f/r/s/rsz_980x448_21.jpg",
          description: "Creative visual effects and motion design for the collaborative project 'Đất rừng phương nam'."
        },
        {
          title: "Gyeongseong Creature 1&2 (VFX 2023)",
          category: "VFX Compositing",
          image: "https://res.cloudinary.com/jerrick/image/upload/v1704630689/659a99a1096da2001d14104a.jpg",
          description: "Contributed to the visual effects for the major series 'Gyeongseong Creature', focusing on creature integration and environment work."
        },
        {
          title: "Death's Game (2023)",
          category: "VFX Compositor",
          image: "https://images.entertainment.ie/media/original_eTio8Mz7awhXiRjsDfoY5XSDqwY.jpg?w=1280&h=768&q=low",
          description: "Specialized VFX work for 'Death's Game'."
        }
      ]
    },
    experience: {
      title: "Experience",
      data: [
        {
          year: "2025 - now",
          company: "3D ART",
          role: "VFX Compositor",
          description: "Specializing in high-end visual effects and compositing for cinematic projects."
        },
        {
          year: "2025",
          company: "OPIM STUDIO",
          role: "VFX Compositor",
          description: "Working on high-end visual effects and compositing projects."
        },
        {
          year: "2022 - 2024",
          company: "DITUS (DIGITAL TWIN STUDIO)",
          role: "VFX Compositor",
          description: "Visual Effects for major South Korean film productions.."
        },
        {
          year: "2022",
          company: "KIMS KOREA CLINIC",
          role: "Video Editor",
          description: "Produced and edited promotional video content."
        },
        {
          year: "2021",
          company: "FUTURE MEDIA",
          role: "Video Editor",
          description: "Handled editing video for various media projects."
        },
        {
          year: "2017 - 2026",
          company: "FREELANCER",
          role: "Video Editor / Movie Maker / Photographer",
          description: "Independent work across multiple creative disciplines."
        }
      ]
    },
    education: {
      title: "Education",
      data: [
        {
          year: "2022",
          school: "DITUS VFX Compositing Trainee Course",
          degree: "VFX Compositor",
          description: "Mastering VFX Compositing: From foundations to advanced international standards."
        },
        {
          year: "2019 - 2020",
          school: "TPD Center",
          degree: "Graduated DITUS VFX Trainee Course & Basic Movie Editor Course"
        },
        {
          year: "2017 - 2018",
          school: "Topica Edumall",
          degree: "Graduated Topica's Video Course"
        },
        {
          year: "2016 - 2021",
          school: "Hanoi University of Science and Technology",
          degree: "Bachelor of Aeronautical Engineering"
        }
      ]
    },
    journal: {
      title: "Visual Journal",
      subtitle: "Photography and daily creative experiments.",
      instagram: "Check my Instagram",
      viewFull: "View Full"
    },
    films: {
      title: "Film Projects",
      subtitle: "A small collection of visual experiments and the stories I’ve tried to tell.",
      youtube: "Check my Youtube",
      preview: "Preview Film",
      data: [
        {
          title: "EP1. The boy who lives in memories",
          category: "Short Film",
          thumbnail: "https://i.postimg.cc/K8jGjp4Q/PXEUj-Xibd-UY-HD.jpg",
          videoUrl: "https://www.youtube.com/watch?v=PXEUjXibdUY",
          description: "“cứ việc quẩn quanh trong hòn đảo ký ức, rồi biết đâu đến một ngày tôi lại phải rời đi.”."
        },
        {
          title: "EP2. \"It's okay, we're gonna be okay! \"",
          category: "Short Film",
          thumbnail: "https://i.postimg.cc/B694hqNP/Sdh8tkdmka4-HD.jpg",
          videoUrl: "https://www.youtube.com/watch?v=Sdh8tkdmka4",
          description: "i need your hugs in my life."
        },
        {
          title: "EP3. A therapy for remembering and forgetting",
          category: "Short Film",
          thumbnail: "https://i.postimg.cc/9QshMW6x/QAU-et-NTj4g-HD-(1).jpg",
          videoUrl: "https://www.youtube.com/watch?v=QAU-etNTj4g",
          description: "forgetting someone is the hardest part."
        },
        {
          title: "EP4. The night we met",
          category: "Short Film",
          thumbnail: "https://i.postimg.cc/QdTzfczF/QAU-et-NTj4g-HD-(1).jpg",
          videoUrl: "https://www.youtube.com/watch?v=10tzGjeZ2sk",
          description: "forgetting someone is the hardest part."
        },
        {
          title: "EP5. Mama's little garden ",
          category: "Short Film",
          thumbnail: "https://i.postimg.cc/xqrv8N37/VZX1TVo-TC0E-HD.jpg",
          videoUrl: "https://www.youtube.com/watch?v=VZX1TVoTC0E",
          description: "Nhà là một nơi đặc biệt."
        },
        {
          title: "EP8. Ha Noi, those days before TET",
          category: "Short Film",
          thumbnail: "https://i.postimg.cc/bvd96Prk/VZX1TVo-TC0E-HD.jpg",
          videoUrl: "https://www.youtube.com/watch?v=jC53jSduxFE",
          description: "Sau hơn nửa năm ở Sài Gòn về thăm Hà Nội, về thăm mọi người, cảm giác là mọi thứ vẫn vậy , cái cảm giác thân quen khó tả ấy."
        }
      ]
    },
    quote: "If you scroll all the way through here, I wish you have a good day!",
    footer: {
      roles: "Editor | VFX | Storyteller",
      rights: "All rights reserved."
    },
    modal: {
      close: "Close"
    }
  },
  vi: {
    nav: {
      home: "Trang chủ",
      projects: "Dự án",
      about: "Giới thiệu",
      experience: "Kinh nghiệm",
      contact: "Liên hệ",
      portfolio: "Hồ sơ"
    },
    hero: {
      roles: ["VFX Compositor", "Dựng phim", "Người kể chuyện"],
      description: "Đam mê Kỹ xảo hình ảnh, Kể chuyện, Quay phim, Dựng phim, Nhiếp ảnh và Sản xuất nội dung video.",
      father: "Ba của một bé",
      and: "và một bé",
      explore: "Khám phá dự án"
    },
    about: {
      title: "Về tôi",
      description: "Tôi là một VFX Compositor và Video Editor đang làm việc tại Hà Nội. Với nền tảng từ Kỹ thuật Hàng không, tôi mang tư duy kỹ thuật vào việc kể chuyện sáng tạo. Tôi đam mê tạo ra những trải nghiệm hình ảnh liền mạch và kể những câu chuyện hấp dẫn.",
      location: "Hà Nội",
      profileSubtitle: "28 | Thiên Yết | Người yêu điện ảnh"
    },
    skills: {
      title: "Kỹ năng chuyên môn",
      subtitle: "Những công cụ và công nghệ tôi sử dụng để hiện thực hóa các ý tưởng.",
      mastery: "Mức độ thành thạo"
    },
    projects: {
      title: "Dự án tiêu biểu",
      subtitle: "Một số dự án gần đây và các thử nghiệm hình ảnh.",
      behance: "Xem tất cả trên Behance",
      data: [
        {
          title: "Mưa Đỏ (2025)",
          category: "Kỹ xảo hình ảnh (VFX)",
          image: "https://bcp.cdnchinhphu.vn/334894974524682240/2025/11/23/5320458781221940676663682014244556147326010710n-1763867996083893343946.jpg",
          description: "Kỹ xảo hình ảnh và tổng hợp nâng cao cho dự án 'Mưa Đỏ' năm 2025, tập trung vào hiệu ứng khí quyển và sự tích hợp liền mạch."
        },
        {
          title: "VFX LIGHT SHOP (2024)",
          category: "VFX / Ánh sáng",
          image: "https://kenh14cdn.com/203336854389633024/2024/12/20/disney-light-shop-main-poster-premieres-december-4-v0-ytqbof5pq81e1-scaled-1734683145545-17346831466441196878154-1734685247780-17346852483462025169713.jpg",
          description: "Công việc VFX chuyên biệt cho 'Light Shop', bao gồm các hiệu ứng ánh sáng phức tạp và cải thiện môi trường kỹ thuật số."
        },
        {
          title: "SƠN TÙNG M-TP - CHÚNG TA CỦA TƯƠNG LAI",
          category: "Tổng hợp kỹ thuật số",
          image: "https://i.ytimg.com/vi/8bX-85G1Xm4/maxresdefault.jpg",
          description: "Tổng hợp cao cấp cho video ca nhạc đình đám, bao gồm xóa phông xanh phức tạp và kể chuyện hình ảnh điện ảnh."
        },
        {
          title: "ĐẤT RỪNG PHƯƠNG NAM (VFX 2023)",
          category: "Kỹ xảo hình ảnh (VFX)",
          image: "https://iguov8nhvyobj.vcdn.cloud/media/catalog/product/cache/1/small_image/600x314/a134659ca47b28f7b266e1777fbf870f/r/s/rsz_980x448_21.jpg",
          description: "Kỹ xảo hình ảnh sáng tạo và thiết kế chuyển động cho dự án hợp tác 'Đất rừng phương nam'."
        },
        {
          title: "Gyeongseong Creature 1&2 (VFX 2023)",
          category: "Kỹ xảo hình ảnh (VFX)",
          image: "https://res.cloudinary.com/jerrick/image/upload/v1704630689/659a99a1096da2001d14104a.jpg",
          description: "Đóng góp vào hiệu ứng hình ảnh cho loạt phim lớn 'Gyeongseong Creature', tập trung vào tích hợp sinh vật và môi trường."
        },
        {
          title: "Death's Game (2023)",
          category: "VFX Compositor",
          image: "https://images.entertainment.ie/media/original_eTio8Mz7awhXiRjsDfoY5XSDqwY.jpg?w=1280&h=768&q=low",
          description: "Công việc VFX chuyên biệt cho 'Death's Game'."
        }
      ]
    },
    experience: {
      title: "Kinh nghiệm",
      data: [
        {
          year: "2025 - nay",
          company: "3D ART",
          role: "VFX Compositor",
          description: "Chuyên về kỹ xảo hình ảnh cao cấp và tổng hợp cho các dự án điện ảnh."
        },
        {
          year: "2025",
          company: "OPIM STUDIO",
          role: "VFX Compositor",
          description: "Làm việc trong các dự án kỹ xảo hình ảnh và tổng hợp cao cấp."
        },
        {
          year: "2022 - 2024",
          company: "DITUS (DIGITAL TWIN STUDIO)",
          role: "VFX Compositor",
          description: "Kỹ xảo hình ảnh cho các tác phẩm điện ảnh lớn của Hàn Quốc."
        },
        {
          year: "2022",
          company: "KIMS KOREA CLINIC",
          role: "Video Editor",
          description: "Sản xuất và dựng nội dung video quảng bá."
        },
        {
          year: "2021",
          company: "FUTURE MEDIA",
          role: "Video Editor",
          description: "Xử lý dựng video cho các dự án truyền thông khác nhau."
        },
        {
          year: "2017 - 2026",
          company: "FREELANCER",
          role: "Video Editor / Movie Maker / Photographer",
          description: "Làm việc độc lập trong nhiều lĩnh vực sáng tạo."
        }
      ]
    },
    education: {
      title: "Học vấn",
      data: [
        {
          year: "2022",
          school: "Khóa đào tạo DITUS VFX Compositing",
          degree: "VFX Compositor",
          description: "Làm chủ VFX Compositing: Từ cơ bản đến các tiêu chuẩn quốc tế nâng cao."
        },
        {
          year: "2019 - 2020",
          school: "Trung tâm TPD",
          degree: "Tốt nghiệp Khóa thực tập sinh DITUS VFX & Khóa dựng phim cơ bản"
        },
        {
          year: "2017 - 2018",
          school: "Topica Edumall",
          degree: "Tốt nghiệp Khóa học Video của Topica"
        },
        {
          year: "2016 - 2021",
          school: "Đại học Bách khoa Hà Nội",
          degree: "Kỹ sư Kỹ thuật Hàng không"
        }
      ]
    },
    journal: {
      title: "Nhật ký hình ảnh",
      subtitle: "Nhiếp ảnh và những thử nghiệm sáng tạo hàng ngày.",
      instagram: "Xem Instagram của tôi",
      viewFull: "Xem đầy đủ"
    },
    films: {
      title: "Dự án phim",
      subtitle: "Một bộ sưu tập nhỏ các thử nghiệm hình ảnh và những câu chuyện tôi đã cố gắng kể.",
      youtube: "Xem Youtube của tôi",
      preview: "Xem phim",
      data: [
        {
          title: "EP1. Cậu bé sống trong ký ức",
          category: "Phim ngắn",
          thumbnail: "https://i.postimg.cc/K8jGjp4Q/PXEUj-Xibd-UY-HD.jpg",
          videoUrl: "https://www.youtube.com/watch?v=PXEUjXibdUY",
          description: "“cứ việc quẩn quanh trong hòn đảo ký ức, rồi biết đâu đến một ngày tôi lại phải rời đi.”."
        },
        {
          title: "EP2. \"Không sao đâu, chúng ta sẽ ổn thôi! \"",
          category: "Phim ngắn",
          thumbnail: "https://i.postimg.cc/B694hqNP/Sdh8tkdmka4-HD.jpg",
          videoUrl: "https://www.youtube.com/watch?v=Sdh8tkdmka4",
          description: "Tôi cần những cái ôm của bạn trong đời."
        },
        {
          title: "EP3. Một liệu pháp để nhớ và quên",
          category: "Phim ngắn",
          thumbnail: "https://i.postimg.cc/9QshMW6x/QAU-et-NTj4g-HD-(1).jpg",
          videoUrl: "https://www.youtube.com/watch?v=QAU-etNTj4g",
          description: "Quên một ai đó là phần khó khăn nhất."
        },
        {
          title: "EP4. Đêm ta gặp nhau",
          category: "Phim ngắn",
          thumbnail: "https://i.postimg.cc/QdTzfczF/QAU-et-NTj4g-HD-(1).jpg",
          videoUrl: "https://www.youtube.com/watch?v=10tzGjeZ2sk",
          description: "Quên một ai đó là phần khó khăn nhất."
        },
        {
          title: "EP5. Khu vườn nhỏ của mẹ",
          category: "Phim ngắn",
          thumbnail: "https://i.postimg.cc/xqrv8N37/VZX1TVo-TC0E-HD.jpg",
          videoUrl: "https://www.youtube.com/watch?v=VZX1TVoTC0E",
          description: "Nhà là một nơi đặc biệt."
        },
        {
          title: "EP8. Hà Nội, những ngày trước Tết",
          category: "Phim ngắn",
          thumbnail: "https://i.postimg.cc/bvd96Prk/VZX1TVo-TC0E-HD.jpg",
          videoUrl: "https://www.youtube.com/watch?v=jC53jSduxFE",
          description: "Sau hơn nửa năm ở Sài Gòn về thăm Hà Nội, về thăm mọi người, cảm giác là mọi thứ vẫn vậy , cái cảm giác thân quen khó tả ấy."
        }
      ]
    },
    quote: "Nếu bạn đã cuộn đến tận đây, tôi chúc bạn có một ngày tốt lành!",
    footer: {
      roles: "Dựng phim | VFX | Người kể chuyện",
      rights: "Bản quyền thuộc về Thai Vuong."
    },
    modal: {
      close: "Đóng"
    }
  }
};

function CountUp({ value, duration = 2 }: { value: number; duration?: number }) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, value, { duration, ease: [0.22, 1, 0.36, 1] });
      return controls.stop;
    }
  }, [count, value, duration, isInView]);

  return <motion.span ref={ref}>{rounded}</motion.span>;
}

function JournalItem({ 
  imgUrl, 
  index, 
  scrollYProgress, 
  setSelectedImage,
  t
}: { 
  imgUrl: string; 
  index: number; 
  scrollYProgress: any; 
  setSelectedImage: any;
  t: any;
  key?: string;
}) {
  // Create a parallax effect: even indices move down, odd indices move up
  const y = useTransform(
    scrollYProgress, 
    [0, 1], 
    [0, (index % 2 === 0 ? 30 : -30)]
  );

  return (
    <motion.div
      style={{ y }}
      whileHover={{ scale: 1.02 }}
      onClick={() => setSelectedImage(imgUrl)}
      className="relative aspect-[4/5] h-[55vh] flex-shrink-0 overflow-hidden rounded-2xl bg-zinc-800/50 cursor-pointer"
    >
      <img 
        src={imgUrl} 
        alt={`${t.journal.title} ${index + 1}`} 
        referrerPolicy="no-referrer"
        className="h-full w-full object-cover transition-transform duration-700 hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 hover:opacity-100 flex items-end p-6">
        <div className="flex items-center gap-2 text-white/80 text-xs font-medium uppercase tracking-widest">
          <ExternalLink size={14} />
          <span>{t.journal.viewFull}</span>
        </div>
      </div>
    </motion.div>
  );
}

function FilmCard({ film, t, setSelectedVideo, getYoutubeId }: { film: any, t: any, setSelectedVideo: any, getYoutubeId: any, key?: any }) {
  const [isHovered, setIsHovered] = useState(false);
  const videoId = getYoutubeId(film.videoUrl);

  return (
    <motion.div 
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0 }
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative overflow-hidden rounded-2xl bg-zinc-900/40 border border-white/5 backdrop-blur-sm transition-all duration-700 hover:border-white/20 hover:shadow-[0_30px_60px_rgba(0,0,0,0.6)]"
    >
      <div className="aspect-video overflow-hidden relative">
        {/* Thumbnail */}
        <img 
          src={film.thumbnail} 
          alt={film.title} 
          referrerPolicy="no-referrer"
          className={`h-full w-full object-cover transition-all duration-1000 ease-out ${isHovered ? 'scale-110 opacity-0' : 'scale-100 opacity-100'}`}
        />
        
        {/* Video Preview on Hover */}
        {isHovered && videoId && (
          <div className="absolute inset-0 z-10 overflow-hidden">
            <iframe
              src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&controls=0&modestbranding=1&rel=0&showinfo=0&iv_load_policy=3&loop=1&playlist=${videoId}&start=10`}
              className="h-full w-full scale-[1.4] pointer-events-none opacity-0 animate-in fade-in duration-1000 fill-mode-forwards"
              frameBorder="0"
              allow="autoplay; encrypted-media"
            ></iframe>
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent z-20" />
          </div>
        )}

        {/* Overlay with Play Button */}
        <div className="absolute inset-0 z-30 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
          <motion.button
            whileHover={{ scale: 1.1, backgroundColor: "rgba(255,255,255,1)", color: "black" }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setSelectedVideo(film.videoUrl)}
            className="bg-white/10 backdrop-blur-xl text-white border border-white/20 rounded-full p-6 shadow-2xl transition-all duration-500"
          >
            <Play size={28} fill="currentColor" />
          </motion.button>
        </div>

        {/* Category Tag */}
        <div className="absolute top-5 left-5 z-40">
          <span className="px-4 py-1.5 rounded-full bg-black/60 backdrop-blur-xl border border-white/10 text-[10px] font-bold uppercase tracking-[0.2em] text-white/90 shadow-lg">
            {film.category}
          </span>
        </div>
      </div>

      <div className="p-8 relative">
        <div className="flex items-start justify-between gap-4">
          <h3 className="font-serif text-2xl text-foreground group-hover:text-white transition-colors duration-500 line-clamp-1 tracking-tight">
            {film.title}
          </h3>
        </div>
        <p className="mt-4 text-sm text-muted-foreground line-clamp-2 leading-relaxed font-light tracking-wide opacity-80 group-hover:opacity-100 transition-opacity duration-500">
          {film.description}
        </p>
        
        <div className="mt-8 flex items-center justify-between">
          <button 
            onClick={() => setSelectedVideo(film.videoUrl)}
            className="text-[10px] font-bold uppercase tracking-[0.3em] text-muted-foreground hover:text-white transition-all flex items-center gap-3 group/btn"
          >
            <span className="relative overflow-hidden inline-block">
              <span className="inline-block transition-transform duration-500 ease-out group-hover/btn:-translate-y-full">{t.films.preview}</span>
              <span className="absolute top-0 left-0 inline-block translate-y-full transition-transform duration-500 ease-out group-hover/btn:translate-y-0 text-white">{t.films.preview}</span>
            </span>
            <div className="w-8 h-px bg-white/20 group-hover/btn:w-12 transition-all duration-500" />
            <ArrowUpRight size={14} className="transition-transform duration-500 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1" />
          </button>
          
          <div className="flex items-center gap-4 opacity-30 group-hover:opacity-100 transition-opacity duration-700">
            <div className="h-px w-12 bg-white/10" />
            <Youtube size={16} className="text-muted-foreground group-hover:text-red-500 transition-colors duration-500" />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function App() {
  const [language, setLanguage] = useState<'en' | 'vi'>('en');
  const t = translations[language];
  const [petInteractions, setPetInteractions] = useState<{ id: number; type: 'cat' | 'dog' }[]>([]);

  const triggerPetInteraction = (type: 'cat' | 'dog') => {
    const id = Date.now();
    setPetInteractions(prev => [...prev, { id, type }]);
    setTimeout(() => {
      setPetInteractions(prev => prev.filter(p => p.id !== id));
    }, 1500);
  };

  const projects = t.projects.data;

  const skills = [
    { name: "Nuke", level: 90 },
    { name: "Adobe Premiere", level: 95 },
    { name: "Adobe After Effects", level: 80 },
    { name: "Adobe Photoshop", level: 90 },
    { name: "Blender", level: 65 },
    { name: "Side FX: Houdini", level: 60 },
  ];

  const experiences = t.experience.data;

  const education = t.education.data;

  // --- EDIT YOUR VISUAL JOURNAL IMAGES HERE ---
  const journalImages = [
    "https://i.postimg.cc/Bv1pxqdX/2-Ong-Thu-1.jpg",
    "https://i.postimg.cc/7Y6g3HzY/11-Giac-ngu-ngay-1.jpg",
    "https://i.postimg.cc/Sx9YdJNd/Vuong-Thai-1-2(1).jpg",
    "https://i.postimg.cc/zDPL1ny2/Vuong-Thai-1-1.jpg",
    "https://i.postimg.cc/Z5PK03q9/nhung-buc-dau-tien-(1).jpg",
    "https://i.postimg.cc/hjvSC51f/27-Ong-va-toa-chung-cu-cu-vang.jpg",
    "https://i.postimg.cc/3rPvvX39/20-Di-qua-hoang-hon.jpg",
    "https://i.postimg.cc/MK7vfgsb/16-Lu-tre-trong-xom.jpg",
    "https://i.postimg.cc/J0WR1zWn/Vuong-Thai-1-2.jpg",
    "https://i.postimg.cc/7Y6g3HzY/11-Giac-ngu-ngay-1.jpg",
    
  ];
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

  const filmProjects = t.films.data;

  const getYoutubeId = (url: string) => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : null;
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, filter: "blur(10px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.8,
        ease: [0.21, 0.47, 0.32, 0.98],
      },
    },
  };

  return (
    <div className="relative min-h-screen w-full bg-background selection:bg-white/20">
      {/* Background Texture & Gradient Overlay */}
      <div className="pointer-events-none fixed inset-0 z-0 opacity-[0.03]" 
           style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }} />
      <div className="pointer-events-none fixed inset-0 z-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.02)_0%,transparent_100%)]" />
      
      {/* Hero Section Container */}
      <div className="relative h-screen w-full overflow-hidden">
        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 z-0 h-full w-full object-cover"
        >
          <source
            src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwlXH07IWA1P/hf_20260314_131748_f2ca2a28-fed7-44c8-b9a9-bd9acdd5ec31.mp4"
            type="video/mp4"
          />
        </video>

        {/* Navigation Bar */}
        <nav className="relative z-10 mx-auto flex max-w-7xl flex-row items-center justify-between px-8 py-6">
          <div className="flex items-center">
            <motion.span 
              initial={{ opacity: 0.8 }}
              animate={{ 
                opacity: [0.8, 1, 0.8],
                textShadow: [
                  "0 0 10px rgba(255, 255, 255, 0.1)",
                  "0 0 20px rgba(255, 255, 255, 0.3)",
                  "0 0 10px rgba(255, 255, 255, 0.1)"
                ]
              }}
              whileHover={{ scale: 1.05, filter: "brightness(1.2)", textShadow: "0 0 25px rgba(255,255,255,0.5)" }}
              transition={{ 
                opacity: { duration: 4, repeat: Infinity, ease: "easeInOut" },
                textShadow: { duration: 4, repeat: Infinity, ease: "easeInOut" }
              }}
              className="font-serif text-3xl tracking-tighter text-foreground cursor-default"
            >
              Thai Vuong
            </motion.span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {[
              { name: t.nav.home, href: "#home" },
              { name: t.nav.projects, href: "#projects" },
              { name: t.nav.about, href: "#about" },
              { name: t.nav.experience, href: "#experience" },
              { name: t.nav.contact, href: "#contact" }
            ].map((link) => (
              <motion.a 
                key={link.name}
                href={link.href} 
                initial={{ opacity: 0.7 }}
                animate={{ 
                  opacity: [0.7, 1, 0.7],
                  textShadow: [
                    "0 0 5px rgba(255, 255, 255, 0)",
                    "0 0 15px rgba(255, 255, 255, 0.2)",
                    "0 0 5px rgba(255, 255, 255, 0)"
                  ]
                }}
                whileHover={{ 
                  scale: 1.1, 
                  y: -2, 
                  opacity: 1, 
                  textShadow: "0 0 20px rgba(255,255,255,0.4)",
                  color: "#fff"
                }}
                whileTap={{ scale: 0.95, filter: "brightness(1.5)" }}
                transition={{ 
                  opacity: { duration: 5, repeat: Infinity, ease: "easeInOut" },
                  textShadow: { duration: 5, repeat: Infinity, ease: "easeInOut" }
                }}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors font-outfit"
              >
                {link.name}
              </motion.a>
            ))}
            
            {/* Language Toggle */}
            <motion.button
              onClick={() => setLanguage(language === 'en' ? 'vi' : 'en')}
              whileHover={{ scale: 1.1, color: "#fff" }}
              whileTap={{ scale: 0.9 }}
              className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors font-outfit"
            >
              <Languages size={18} />
              <span>{language === 'en' ? 'EN' : 'VI'}</span>
            </motion.button>

            <motion.a 
              href="https://www.instagram.com/iamthaivuong/" 
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0.7 }}
              animate={{ opacity: [0.7, 1, 0.7] }}
              whileHover={{ 
                scale: 1.1, 
                y: -2, 
                opacity: 1, 
                filter: "drop-shadow(0 0 10px rgba(255,255,255,0.5))" 
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Instagram size={18} />
            </motion.a>
          </div>

          <motion.a 
            href="https://www.behance.net/vuongthai961af" 
            target="_blank" 
            rel="noopener noreferrer"
            initial={{ opacity: 0.9, boxShadow: "0 0 10px rgba(255,255,255,0.1)" }}
            animate={{ 
              opacity: [0.9, 1, 0.9],
              boxShadow: [
                "0 0 10px rgba(255,255,255,0.1)",
                "0 0 20px rgba(255,255,255,0.3)",
                "0 0 10px rgba(255,255,255,0.1)"
              ]
            }}
            whileHover={{ 
              scale: 1.05, 
              opacity: 1, 
              boxShadow: "0 0 30px rgba(255,255,255,0.5)",
              filter: "brightness(1.2)"
            }}
            whileTap={{ scale: 0.98, filter: "brightness(1.4)" }}
            transition={{ 
              opacity: { duration: 4, repeat: Infinity, ease: "easeInOut" },
              boxShadow: { duration: 4, repeat: Infinity, ease: "easeInOut" }
            }}
            className="liquid-glass rounded-full px-6 py-2.5 text-sm font-medium text-foreground cursor-pointer font-outfit"
          >
            {t.nav.portfolio}
          </motion.a>
        </nav>

        {/* Hero Content */}
        <main id="home" className="relative z-10 flex h-[calc(100vh-88px)] flex-col items-center justify-center px-6 text-center">
          <div className="max-w-7xl">
            <motion.h1 
              initial={{ opacity: 0 }}
              animate={{ 
                opacity: 1,
                textShadow: [
                  "0 0 20px rgba(255, 255, 255, 0.15)",
                  "0 0 40px rgba(255, 255, 255, 0.3)",
                  "0 0 20px rgba(255, 255, 255, 0.15)"
                ]
              }}
              whileHover={{ scale: 1.01 }}
              transition={{ 
                opacity: { duration: 1 },
                textShadow: { duration: 3, repeat: Infinity, ease: "easeInOut" }
              }}
              className="font-serif text-2xl leading-tight tracking-tighter text-foreground sm:text-4xl md:text-6xl lg:text-7xl cursor-default flex flex-wrap justify-center items-center gap-x-3 md:gap-x-6"
            >
              {t.hero.roles.map((word, i) => (
                <React.Fragment key={i}>
                  <motion.span
                    initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
                    animate={{ 
                      opacity: 1, 
                      y: 0, 
                      filter: ["blur(0px)", "blur(2px)", "blur(0px)"],
                      x: [0, -1, 1, 0]
                    }}
                    whileHover={{ 
                      scale: 1.05, 
                      filter: "brightness(1.5) drop-shadow(0 0 15px rgba(255,255,255,0.4))",
                      transition: { duration: 0.2 }
                    }}
                    transition={{ 
                      duration: 0.8, 
                      delay: i * 0.1,
                      ease: [0.21, 0.47, 0.32, 0.98],
                      filter: { repeat: Infinity, duration: 4, repeatDelay: 2 + i },
                      x: { repeat: Infinity, duration: 0.2, repeatDelay: 4 + i }
                    }}
                    className="inline-block transition-all duration-500 hover:text-white text-shimmer"
                  >
                    {word}
                  </motion.span>
                  {i < t.hero.roles.length - 1 && (
                      <motion.span 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.4 }}
                        transition={{ delay: i * 0.1 + 0.5 }}
                        className="inline-block text-muted-foreground/40 font-serif font-light text-2xl md:text-5xl lg:text-6xl mx-2 md:mx-4"
                      >
                        /
                      </motion.span>
                  )}
                </React.Fragment>
              ))}
            </motion.h1>
            
            <p className="animate-fade-rise-delay mx-auto mt-8 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg flex items-center justify-center gap-2 flex-wrap">
              <span>{t.hero.description}</span>
              <span className="flex items-center gap-2">
                {t.hero.father} 
                <span className="relative inline-flex items-center gap-2">
                  <motion.button
                    whileHover={{ scale: 1.2, rotate: 10, color: "#fff" }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => triggerPetInteraction('cat')}
                    className="p-1 rounded-md hover:bg-white/10 transition-colors cursor-pointer relative"
                    title="Click me!"
                  >
                    <Cat size={20} className="text-muted-foreground hover:text-white transition-colors" />
                  </motion.button>
                  {t.hero.and} 
                  <motion.button
                    whileHover={{ scale: 1.2, rotate: -10, color: "#fff" }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => triggerPetInteraction('dog')}
                    className="p-1 rounded-md hover:bg-white/10 transition-colors cursor-pointer relative"
                    title="Click me!"
                  >
                    <Dog size={20} className="text-muted-foreground hover:text-white transition-colors" />
                  </motion.button>

                  <AnimatePresence>
                    {petInteractions.map((pet) => (
                      <motion.div
                        key={pet.id}
                        initial={{ opacity: 0, y: 0, scale: 0.5 }}
                        animate={{ 
                          opacity: [0, 1, 1, 0], 
                          y: -60, 
                          x: Math.random() * 40 - 20,
                          scale: [0.5, 1.2, 1, 0.8],
                          rotate: Math.random() * 40 - 20 
                        }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1.2, ease: "easeOut" }}
                        className="absolute pointer-events-none flex flex-col items-center"
                        style={{ 
                          left: pet.type === 'cat' ? '10%' : '80%',
                          top: '-20px'
                        }}
                      >
                        <span className="text-[10px] font-bold uppercase tracking-widest text-white mb-1 bg-black/50 px-2 py-0.5 rounded-full backdrop-blur-sm">
                          {pet.type === 'cat' ? 'Meow!' : 'Woof!'}
                        </span>
                        {pet.type === 'cat' ? (
                          <Heart size={14} className="text-pink-500 fill-pink-500" />
                        ) : (
                          <Bone size={14} className="text-amber-200 fill-amber-200" />
                        )}
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </span>
              </span>
            </p>

            <div className="animate-fade-rise-delay-2 mt-12">
              <a 
                href="#projects"
                className="liquid-glass rounded-full px-14 py-5 text-base font-medium text-foreground transition-all duration-500 hover:scale-[1.03] cursor-pointer inline-block shadow-[0_0_20px_rgba(255,255,255,0.05)] hover:shadow-[0_0_40px_rgba(255,255,255,0.15)]"
              >
                {t.hero.explore}
              </a>
            </div>
          </div>
        </main>
      </div>

      {/* About Section */}
      <section id="about" className="relative z-10 bg-background px-6 py-24 md:py-32">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mx-auto max-w-7xl"
        >
          <div className="grid gap-16 md:grid-cols-2 items-center">
            <motion.div variants={itemVariants}>
              <h2 className="font-serif text-4xl tracking-tighter text-foreground sm:text-5xl">{t.about.title}</h2>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground font-body">
                {t.about.description}
              </p>
              <div className="mt-8 space-y-4 font-outfit">
                <div className="flex items-center gap-3 text-muted-foreground group cursor-default">
                  <MapPin size={20} className="group-hover:scale-110 transition-transform" />
                  <motion.span 
                    whileHover={{ textShadow: "0 0 15px rgba(255,255,255,0.8)", color: "#ffffff" }}
                    className="transition-all duration-300"
                  >
                    {t.about.location}
                  </motion.span>
                </div>
                <a 
                  href="mailto:vuongdinhthai123@gmail.com" 
                  className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-all group"
                >
                  <Mail size={20} className="group-hover:scale-110 transition-transform" />
                  <motion.span 
                    whileHover={{ textShadow: "0 0 15px rgba(255,255,255,0.8)", color: "#ffffff" }}
                    className="transition-all duration-300"
                  >
                    vuongdinhthai123@gmail.com
                  </motion.span>
                </a>
                <a 
                  href="tel:0967570020" 
                  className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-all group"
                >
                  <Phone size={20} className="group-hover:scale-110 transition-transform" />
                  <motion.span 
                    whileHover={{ textShadow: "0 0 15px rgba(255,255,255,0.8)", color: "#ffffff" }}
                    className="transition-all duration-300"
                  >
                    0967570020
                  </motion.span>
                </a>
              </div>
            </motion.div>
            
            <motion.div 
              variants={itemVariants}
              className="relative aspect-square overflow-hidden rounded-3xl group max-w-md mx-auto md:ml-auto md:mr-0"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent z-10" />
              <img 
                src="https://i.postimg.cc/QMLnWV00/480433998-3755976691399443-3137212391901230266-n.jpg" 
                alt="Thai Vuong Profile" 
                referrerPolicy="no-referrer"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute bottom-6 left-6 z-20">
                <p className="font-serif text-xl text-white">Thai Vuong</p>
                <p className="text-white/60 text-sm font-outfit">{t.about.profileSubtitle}</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Technical Skills Section */}
      <section id="skills" className="relative z-10 bg-secondary/10 px-6 py-24 md:py-32">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mx-auto max-w-7xl"
        >
          <div className="mb-16 text-center">
            <motion.h2 variants={itemVariants} className="font-serif text-4xl tracking-tighter text-foreground sm:text-5xl">{t.skills.title}</motion.h2>
            <motion.p variants={itemVariants} className="mt-4 text-muted-foreground font-outfit">{t.skills.subtitle}</motion.p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {skills.map((skill, index) => (
              <motion.div 
                key={index}
                variants={itemVariants}
                whileHover={{ y: -5, scale: 1.02, boxShadow: "0 0 40px rgba(255,255,255,0.1)" }}
                className="liquid-glass group relative rounded-2xl p-8 transition-all hover:bg-white/10 overflow-hidden shadow-[0_0_20px_rgba(255,255,255,0.02)]"
              >
                {/* Decorative background element */}
                <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-white/5 blur-2xl transition-all group-hover:bg-white/10" />
                
                <div className="mb-6 flex items-center justify-between relative z-10">
                  <h3 className="font-serif text-xl text-foreground">{skill.name}</h3>
                  <div className="flex items-baseline gap-1">
                    <span className="text-2xl font-bold text-white font-outfit">
                      <CountUp value={skill.level} />
                    </span>
                    <span className="text-sm text-muted-foreground">%</span>
                  </div>
                </div>
                
                <div className="relative h-2 w-full bg-white/5 rounded-full overflow-hidden z-10">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
                    className="absolute h-full bg-gradient-to-r from-white/20 via-white/60 to-white rounded-full"
                  />
                  {/* Shimmer effect on the bar */}
                  <motion.div
                    initial={{ x: "-100%" }}
                    animate={{ x: "100%" }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent w-1/2"
                  />
                </div>
                
                <div className="mt-4 flex items-center justify-between z-10">
                  <span className="text-[10px] uppercase tracking-widest text-muted-foreground font-outfit">{t.skills.mastery}</span>
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <div 
                        key={i} 
                        className={`h-1 w-3 rounded-full ${i < Math.floor(skill.level / 20) ? 'bg-white/40' : 'bg-white/5'}`} 
                      />
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="relative z-10 bg-secondary/20 px-6 py-24 md:py-32">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mx-auto max-w-7xl"
        >
          <motion.div variants={itemVariants} className="mb-16 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
            <div>
              <h2 className="font-serif text-4xl tracking-tighter text-foreground sm:text-5xl">{t.projects.title}</h2>
              <p className="mt-4 text-muted-foreground">{t.projects.subtitle}</p>
            </div>
            <motion.a 
              href="https://www.behance.net/vuongthai961af" 
              target="_blank" 
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, boxShadow: "0 0 40px rgba(255,255,255,0.15)" }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-medium transition-all duration-500 hover:bg-white/10 z-20 font-outfit shadow-[0_0_20px_rgba(255,255,255,0.05)]"
            >
              <ExternalLink size={18} />
              <span>{t.projects.behance}</span>
            </motion.a>
          </motion.div>

          <div className="grid gap-8 sm:grid-cols-2">
            {projects.map((project, index) => (
              <motion.div 
                key={index} 
                variants={itemVariants}
                whileHover={{ y: -10, boxShadow: "0 0 40px rgba(255,255,255,0.1)" }}
                className="group relative overflow-hidden rounded-2xl bg-secondary/50 transition-all hover:bg-secondary shadow-[0_0_20px_rgba(255,255,255,0.02)]"
              >
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    referrerPolicy="no-referrer"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="p-8">
                  <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">{project.category}</span>
                  <h3 className="mt-2 font-vietnamese font-semibold text-2xl text-foreground">{project.title}</h3>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{project.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Experience & Education Section */}
      <section id="experience" className="relative z-10 bg-background px-6 py-24 md:py-32">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mx-auto max-w-7xl"
        >
          <div className="grid gap-16 lg:grid-cols-2">
            {/* Experience */}
            <div>
              <motion.h2 
                variants={itemVariants}
                className="mb-12 font-serif text-4xl tracking-tighter text-foreground"
              >
                {t.experience.title}
              </motion.h2>
              <div className="relative space-y-12 border-l border-white/10 pl-8">
                {experiences.map((exp, index) => (
                  <motion.div 
                    key={index} 
                    variants={itemVariants}
                    whileHover={{ x: 10 }}
                    className="group relative cursor-default"
                  >
                    <motion.div 
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ type: "spring", stiffness: 260, damping: 20, delay: index * 0.1 + 0.4 }}
                      className="absolute -left-[41px] top-1.5 h-4 w-4 rounded-full border-2 border-white bg-background group-hover:bg-white group-hover:shadow-[0_0_15px_rgba(255,255,255,0.5)] transition-all duration-300"
                    ></motion.div>
                    <span className="text-sm font-medium text-muted-foreground transition-colors group-hover:text-white/60">{exp.year}</span>
                    <h3 className="mt-1 font-serif text-2xl tracking-tight text-foreground transition-colors group-hover:text-white">{exp.company}</h3>
                    <p className="text-sm font-medium text-foreground/80">{exp.role}</p>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{exp.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Education */}
            <div>
              <motion.h2 
                variants={itemVariants}
                className="mb-12 font-serif text-4xl tracking-tighter text-foreground"
              >
                {t.education.title}
              </motion.h2>
              <div className="relative space-y-12 border-l border-white/10 pl-8">
                {education.map((edu, index) => (
                  <motion.div 
                    key={index} 
                    variants={itemVariants}
                    whileHover={{ x: 10 }}
                    className="group relative cursor-default"
                  >
                    <motion.div 
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ type: "spring", stiffness: 260, damping: 20, delay: index * 0.1 + 0.4 }}
                      className="absolute -left-[41px] top-1.5 h-4 w-4 rounded-full border-2 border-white bg-background group-hover:bg-white group-hover:shadow-[0_0_15px_rgba(255,255,255,0.5)] transition-all duration-300"
                    ></motion.div>
                    <span className="text-sm font-medium text-muted-foreground transition-colors group-hover:text-white/60">{edu.year}</span>
                    <h3 className="mt-1 font-serif text-2xl tracking-tight text-foreground transition-colors group-hover:text-white">{edu.school}</h3>
                    <p className="mt-1 text-sm font-medium text-foreground/80">{edu.degree}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Visual Journal Section - Horizontal Scroll Version */}
      <section id="journal" ref={targetRef} className="relative h-[400vh] bg-background">
        <div className="sticky top-0 flex h-screen items-center overflow-hidden z-10">
          {/* Background Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-blue-500/5 rounded-full blur-[120px]" />
          
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="mx-auto w-full max-w-7xl px-6"
            >
              <motion.div variants={itemVariants} className="mb-16 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
                <div>
                  <h2 className="font-serif text-4xl tracking-tighter text-foreground sm:text-5xl">{t.journal.title}</h2>
                  <p className="mt-4 text-muted-foreground">{t.journal.subtitle}</p>
                </div>
                <motion.a 
                  href="https://www.instagram.com/iamthaivuong/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05, boxShadow: "0 0 40px rgba(255,255,255,0.15)" }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-medium transition-all duration-500 hover:bg-white/10 z-20 font-outfit shadow-[0_0_20px_rgba(255,255,255,0.05)]"
                >
                  <Instagram size={18} />
                  <span>{t.journal.instagram}</span>
                </motion.a>
              </motion.div>

            {/* Horizontal Scroll Container */}
            <div className="relative group/journal">
              <motion.div 
                style={{ x }} 
                className="flex gap-8"
              >
                {journalImages.map((imgUrl, i) => (
                  <JournalItem 
                    key={`journal-horiz-${i}`}
                    imgUrl={imgUrl}
                    index={i}
                    scrollYProgress={scrollYProgress}
                    setSelectedImage={setSelectedImage}
                    t={t}
                  />
                ))}
              </motion.div>

              {/* Navigation Arrows */}
              <div className="absolute inset-y-0 -left-4 -right-4 flex items-center justify-between pointer-events-none">
                <motion.button
                  whileHover={{ scale: 1.1, backgroundColor: "rgba(255,255,255,0.1)" }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => {
                    const scrollAmount = window.innerHeight * 0.8;
                    window.scrollBy({ top: -scrollAmount, behavior: 'smooth' });
                  }}
                  className="pointer-events-auto flex h-12 w-12 items-center justify-center rounded-full bg-white/5 text-white/30 backdrop-blur-sm transition-all hover:text-white/80 md:h-16 md:w-16"
                >
                  <ChevronLeft size={32} />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.1, backgroundColor: "rgba(255,255,255,0.1)" }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => {
                    const scrollAmount = window.innerHeight * 0.8;
                    window.scrollBy({ top: scrollAmount, behavior: 'smooth' });
                  }}
                  className="pointer-events-auto flex h-12 w-12 items-center justify-center rounded-full bg-white/5 text-white/30 backdrop-blur-sm transition-all hover:text-white/80 md:h-16 md:w-16"
                >
                  <ChevronRight size={32} />
                </motion.button>
              </div>
            </div>

            {/* Text Overlay - Background style */}
            <div className="pointer-events-none absolute inset-0 -z-10 flex items-center justify-center overflow-hidden opacity-[0.03]">
              <span className="whitespace-nowrap font-serif text-[30vw] font-bold leading-none select-none">
                VISION VISUAL ME
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Film Projects Section */}
      <section id="films" className="relative z-30 bg-background px-6 py-24 md:py-32">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mx-auto max-w-7xl"
        >
          <motion.div variants={itemVariants} className="mb-16 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
            <div>
              <h2 className="font-serif text-4xl tracking-tighter text-foreground sm:text-5xl">{t.films.title}</h2>
              <p className="mt-4 text-muted-foreground">{t.films.subtitle}</p>
            </div>
            <motion.a 
              href="https://www.youtube.com/@iamthaivuong" 
              target="_blank" 
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-medium transition-colors hover:bg-white/10 z-20 font-outfit"
            >
              <Youtube size={18} />
              <span>{t.films.youtube}</span>
            </motion.a>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-3">
            {filmProjects.map((film, index) => (
              <FilmCard 
                key={index} 
                film={film} 
                t={t} 
                setSelectedVideo={setSelectedVideo} 
                getYoutubeId={getYoutubeId} 
              />
            ))}
          </div>
        </motion.div>
      </section>

      {/* Final Quote Section */}
      <section className="relative z-10 bg-background py-32 md:py-48">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="mx-auto max-w-4xl px-6 text-center"
        >
          <h2 className="font-serif text-3xl md:text-5xl italic tracking-tight text-foreground/90 leading-tight">
            "{t.quote}"
          </h2>
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 1 }}
            className="mt-12 flex flex-col items-center gap-2"
          >
            <span className="text-[10px] md:text-xs font-medium uppercase tracking-[0.6em] text-muted-foreground/60">
              THAI VUONG™ 2026
            </span>
            <div className="h-px w-8 bg-white/10" />
          </motion.div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer id="contact" className="relative z-10 border-t border-border bg-background px-6 py-12">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 md:flex-row">
          <div className="text-center md:text-left">
            <motion.span 
              whileHover={{ scale: 1.05, filter: "brightness(1.2)", textShadow: "0 0 20px rgba(255,255,255,0.3)" }}
              className="font-serif text-3xl tracking-tighter text-foreground cursor-default inline-block"
            >
              Thai Vuong
            </motion.span>
            <p className="mt-2 text-sm text-muted-foreground">{t.footer.roles}</p>
          </div>
          
          <div className="flex items-center space-x-6">
            <motion.a 
              href="mailto:vuongdinhthai123@gmail.com" 
              whileHover={{ scale: 1.2, filter: "drop-shadow(0 0 8px rgba(255,255,255,0.5))" }}
              className="text-muted-foreground hover:text-foreground transition-all"
            >
              <Mail size={20} />
            </motion.a>
            <motion.a 
              href="https://facebook.com/iamthaivuong" 
              target="_blank" 
              rel="noopener noreferrer" 
              whileHover={{ scale: 1.2, filter: "drop-shadow(0 0 8px rgba(255,255,255,0.5))" }}
              className="text-muted-foreground hover:text-foreground transition-all"
            >
              <Facebook size={20} />
            </motion.a>
            <motion.a 
              href="https://www.behance.net/vuongthai961af" 
              target="_blank" 
              rel="noopener noreferrer" 
              whileHover={{ scale: 1.1, textShadow: "0 0 10px rgba(255,255,255,0.5)" }}
              className="text-muted-foreground hover:text-foreground transition-all"
            >
              Behance
            </motion.a>
            <motion.a 
              href="https://www.instagram.com/iamthaivuong/" 
              target="_blank" 
              rel="noopener noreferrer" 
              whileHover={{ scale: 1.2, filter: "drop-shadow(0 0 8px rgba(255,255,255,0.5))" }}
              className="text-muted-foreground hover:text-foreground transition-all"
            >
              <Instagram size={20} />
            </motion.a>
            <motion.a 
              href="https://www.youtube.com/@iamthaivuong" 
              target="_blank" 
              rel="noopener noreferrer" 
              whileHover={{ scale: 1.2, filter: "drop-shadow(0 0 8px rgba(255,255,255,0.5))" }}
              className="text-muted-foreground hover:text-foreground transition-all"
            >
              <Youtube size={20} />
            </motion.a>
          </div>

          <p className="text-xs text-muted-foreground">2026 Thai Vuong. {t.footer.rights}</p>
        </div>
      </footer>

      {/* Video Modal */}
      <AnimatePresence>
        {selectedVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[110] flex items-center justify-center bg-black/95 backdrop-blur-xl p-4 md:p-12"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-6xl aspect-video bg-black rounded-2xl overflow-hidden shadow-[0_0_100px_rgba(0,0,0,0.8)] border border-white/10"
            >
              <iframe
                src={`https://www.youtube.com/embed/${getYoutubeId(selectedVideo)}?autoplay=1&rel=0&modestbranding=1`}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="h-full w-full"
              ></iframe>
              
              <motion.button 
                whileHover={{ scale: 1.1, backgroundColor: "rgba(255,255,255,1)", color: "black" }}
                whileTap={{ scale: 0.9 }}
                className="absolute top-6 right-6 bg-black/50 backdrop-blur-md text-white p-3 rounded-full transition-all border border-white/10 z-50"
                onClick={() => setSelectedVideo(null)}
              >
                <ChevronLeft size={24} className="rotate-180" />
              </motion.button>

              <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/80 to-transparent pointer-events-none">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                  <span className="text-xs font-bold uppercase tracking-[0.3em] text-white/60">Now Playing</span>
                </div>
              </div>
            </motion.div>
            <div 
              className="absolute inset-0 -z-10 cursor-pointer" 
              onClick={() => setSelectedVideo(null)}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4 md:p-12 cursor-zoom-out"
          >
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              src={selectedImage}
              alt={t.journal.viewFull}
              className="max-h-full max-w-full rounded-lg object-contain shadow-2xl"
              referrerPolicy="no-referrer"
            />
            <button 
              className="absolute top-8 right-8 text-white/50 hover:text-white transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <span className="text-sm uppercase tracking-widest">{t.modal.close}</span>
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

