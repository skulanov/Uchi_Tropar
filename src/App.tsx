import React, { useState, useMemo, useRef, useEffect } from 'react';
import { 
  Book, 
  Settings, 
  Play, 
  Pause, 
  Eye, 
  ChevronRight, 
  Info,
  ChevronLeft,
  X,
  Shuffle,
  Sparkles
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { TROPAR_DATA, CATEGORIES, Troparion, TroparCategory } from './constants';

type ViewState = 'categories' | 'list' | 'detail';

export default function App() {
  const [view, setView] = useState<ViewState>('categories');
  const [selectedCategory, setSelectedCategory] = useState<TroparCategory | null>(null);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [memLevel, setMemLevel] = useState(0); // 0-4
  const [showSettings, setShowSettings] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [isRandomMode, setIsRandomMode] = useState(false);
  
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const selectedTroparion = useMemo(() => {
    if (!selectedId) return null;
    return [...TROPAR_DATA.resurrection, ...TROPAR_DATA.feasts].find(t => t.id === selectedId);
  }, [selectedId]);

  const filteredTroparia = useMemo(() => {
    if (!selectedCategory) return [];
    return selectedCategory.items;
  }, [selectedCategory]);

  // Audio Logic
  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      const updateProgress = () => {
        if (audio.duration) {
          setProgress((audio.currentTime / audio.duration) * 100);
        }
      };
      audio.addEventListener('timeupdate', updateProgress);
      audio.addEventListener('ended', () => setIsPlaying(false));
      return () => {
        audio.removeEventListener('timeupdate', updateProgress);
        audio.removeEventListener('ended', () => setIsPlaying(false));
      };
    }
  }, [selectedId, view]);

  const getDriveUrl = (fileId: string) => {
    if (!fileId || fileId.length < 10) return '';
    return `https://docs.google.com/uc?export=download&id=${fileId}`;
  };

  const toggleAudio = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch(e => console.error("Audio error:", e));
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleBack = () => {
    if (view === 'detail') {
      if (isRandomMode) {
        setView('categories');
        setIsRandomMode(false);
      } else {
        setView('list');
      }
      setIsPlaying(false);
      setProgress(0);
      if (audioRef.current) audioRef.current.pause();
    } else if (view === 'list') {
      setView('categories');
    }
  };

  const handleRandom = () => {
    const all = [...TROPAR_DATA.resurrection, ...TROPAR_DATA.feasts];
    const random = all[Math.floor(Math.random() * all.length)];
    setSelectedId(random.id);
    setView('detail');
    setIsRandomMode(true);
    setMemLevel(4); // Start fully hidden
  };

  const cycleMemLevel = () => {
    if (isRandomMode) {
      // Reverse cycle for random mode: 4 -> 3 -> 2 -> 1 -> 0
      setMemLevel((prev) => (prev > 0 ? prev - 1 : 4));
    } else {
      // Normal cycle: 0 -> 1 -> 2 -> 3 -> 4
      setMemLevel((prev) => (prev + 1) % 5);
    }
  };

  return (
    <div className="min-h-screen bg-[#FDFCFB] text-[#1A1A1A] font-serif selection:bg-[#5A5A40] selection:text-white">
      {/* Header */}
      <header className="sticky top-0 z-30 bg-[#FDFCFB]/90 backdrop-blur-md border-b border-[#5A5A40]/10 px-4 py-4 md:px-8">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => setView('categories')}>
            <div className="w-10 h-10 rounded-full bg-[#5A5A40] flex items-center justify-center text-white shadow-lg shadow-[#5A5A40]/20">
              <Book size={22} strokeWidth={2.5} />
            </div>
            <div>
              <h1 className="text-xl font-bold tracking-tight">Учи Тропарь</h1>
            </div>
          </div>
          <button 
            onClick={() => setShowSettings(true)}
            className="p-2 hover:bg-[#5A5A40]/5 rounded-full transition-colors text-[#5A5A40]"
          >
            <Settings size={22} />
          </button>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-8 md:px-8 min-h-[calc(100vh-80px)]">
        <AnimatePresence mode="wait">
          {view === 'categories' && (
            <motion.div
              key="categories"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="grid gap-6 py-6"
            >
              <div className="grid md:grid-cols-2 gap-4">
                {CATEGORIES.map((cat) => (
                  <motion.button
                    key={cat.id}
                    onClick={() => {
                      setSelectedCategory(cat);
                      setView('list');
                    }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="bg-white p-8 rounded-3xl border border-[#5A5A40]/10 shadow-sm text-left flex flex-col gap-4 group transition-all hover:shadow-xl hover:border-[#5A5A40]/30"
                  >
                    <div className="w-12 h-12 rounded-2xl bg-[#5A5A40]/5 flex items-center justify-center text-[#5A5A40]">
                      <Sparkles size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-1">{cat.title}</h3>
                      <p className="text-sm text-[#5A5A40]/60 font-sans leading-relaxed">{cat.description}</p>
                    </div>
                  </motion.button>
                ))}

                <motion.button
                  onClick={handleRandom}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="md:col-span-2 bg-[#5A5A40] p-6 rounded-3xl text-white shadow-xl flex items-center justify-center gap-4 transition-all hover:brightness-110"
                >
                  <Shuffle size={24} />
                  <div className="text-left">
                    <h3 className="text-lg font-bold">Случайный выбор</h3>
                  </div>
                </motion.button>
              </div>
            </motion.div>
          )}

          {view === 'list' && selectedCategory && (
            <motion.div
              key="list"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-6"
            >
              <div className="flex items-center justify-between mb-4">
                <button onClick={handleBack} className="flex items-center gap-2 text-[#5A5A40] font-sans font-bold text-sm uppercase tracking-wider">
                  <ChevronLeft size={18} /> Назад
                </button>
                <div className="text-right">
                  <h3 className="text-lg font-bold">{selectedCategory.title}</h3>
                </div>
              </div>

              <div className="grid gap-3">
                {filteredTroparia.map((t, idx) => (
                  <motion.button
                    key={t.id}
                    onClick={() => {
                      setSelectedId(t.id);
                      setView('detail');
                      setMemLevel(0);
                    }}
                    className="bg-white p-5 rounded-2xl border border-[#5A5A40]/5 shadow-sm text-left flex items-center justify-between group hover:border-[#5A5A40]/20 transition-all"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center font-bold text-sm">
                        {selectedCategory.id === 'feasts' ? (idx + 1) : t.glass.split(' ')[1]}
                      </div>
                      <h4 className="font-medium">
                        {t.title}{selectedCategory.id === 'feasts' ? `, ${t.glass}` : ''}
                      </h4>
                    </div>
                    <ChevronRight size={18} className="text-[#5A5A40]/20 group-hover:text-[#5A5A40] transition-colors" />
                  </motion.button>
                ))}
              </div>
            </motion.div>
          )}

          {view === 'detail' && selectedTroparion && (
            <motion.div
              key="detail"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              className="space-y-6 pb-24"
            >
              <div className="flex items-center justify-between mb-4">
                <button onClick={handleBack} className="flex items-center gap-2 text-[#5A5A40] font-sans font-bold text-sm uppercase tracking-wider">
                  <ChevronLeft size={18} /> Назад
                </button>
                <div className="flex bg-[#5A5A40]/5 rounded-full p-1 border border-[#5A5A40]/10">
                  <button 
                    onClick={cycleMemLevel}
                    className={`flex items-center gap-2 px-6 py-2 rounded-full font-sans text-xs font-bold uppercase tracking-widest transition-all ${
                      memLevel > 0 
                      ? 'bg-[#5A5A40] text-white shadow-lg' 
                      : 'text-[#5A5A40] hover:bg-[#5A5A40]/10 border border-[#5A5A40]/20'
                    }`}
                  >
                    <Eye size={16} /> УЧИТЬ (Ур.{memLevel})
                  </button>
                </div>
              </div>

              <div className="bg-white rounded-[2.5rem] p-8 md:p-14 border border-[#5A5A40]/5 relative shadow-sm">
                <div className="text-center space-y-3 mb-10">
                  <span className="text-[10px] font-sans font-bold uppercase tracking-[0.25em] text-[#5A5A40]/40">{selectedTroparion.glass}</span>
                  <h2 className="text-3xl md:text-4xl font-black italic">{selectedTroparion.title}</h2>
                </div>

                <div className="text-center text-2xl md:text-3xl leading-[1.6] space-y-4">
                  {renderTextWithLevel(selectedTroparion.text, memLevel)}
                </div>

                {/* Audio Minimal Player */}
                {selectedTroparion.audio && (
                  <div className="mt-14 pt-10 border-t border-[#5A5A40]/5 flex flex-col items-center gap-6">
                    <div className="flex items-center gap-6">
                      <button 
                        onClick={toggleAudio}
                        className="w-16 h-16 rounded-full bg-[#5A5A40] text-white flex items-center justify-center hover:scale-110 transition-all shadow-xl active:scale-95"
                      >
                        {isPlaying ? <Pause size={28} /> : <Play size={28} className="ml-1" />}
                      </button>
                    </div>
                    <div className="w-full max-w-sm h-1.5 bg-[#5A5A40]/10 rounded-full overflow-hidden">
                      <motion.div 
                        className="h-full bg-[#5A5A40]" 
                        animate={{ width: `${progress}%` }}
                        transition={{ type: 'spring', bounce: 0, duration: 0.2 }}
                      />
                    </div>
                    <audio 
                      ref={audioRef} 
                      src={getDriveUrl(selectedTroparion.audio)} 
                      key={selectedTroparion.audio}
                      preload="auto"
                    />
                  </div>
                )}
              </div>

              {/* Tips Section */}
              <div className="bg-[#5A5A40] text-white rounded-[2rem] p-8 space-y-6 shadow-xl">
                <div className="flex items-center gap-3">
                  <Info size={24} className="opacity-50" />
                  <h4 className="text-sm font-bold uppercase tracking-widest">Советы по заучиванию</h4>
                </div>
                <ul className="space-y-4 list-none">
                  {selectedTroparion.tips.map((tip, i) => (
                    <li key={i} className="flex gap-4 items-start">
                      <span className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center shrink-0 text-xs font-bold">{i + 1}</span>
                      <p className="text-sm opacity-90 leading-relaxed italic">{tip}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Settings Modal */}
      <AnimatePresence>
        {showSettings && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowSettings(false)}
              className="absolute inset-0 bg-[#000]/40 backdrop-blur-sm"
            />
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="bg-white w-full max-w-md rounded-[2.5rem] shadow-2xl relative z-10 p-10 border border-[#5A5A40]/10"
            >
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl font-bold">О проекте</h2>
                <button onClick={() => setShowSettings(false)} className="p-2 hover:bg-gray-100 rounded-full"><X size={24} /></button>
              </div>
              <div className="space-y-6 font-sans text-sm">
                <div className="bg-[#5A5A40]/5 p-5 rounded-2xl">
                  <h4 className="font-bold uppercase tracking-widest text-[10px] text-[#5A5A40]/40 mb-2">Версия</h4>
                  <p className="font-bold text-[#5A5A40]">1.2.0 "Голос"</p>
                </div>
                <div className="p-2 leading-relaxed">
                  <p className="mb-4 text-gray-600">Это приложение создано для помощи верующим в изучении богослужебных текстов. Использование режима "Учить" помогает эффективно запомнить структуру и смысл каждого тропаря.</p>
                  <p className="italic text-[#5A5A40]">Молитвенной помощи всем учащимся!</p>
                </div>
              </div>
              <button 
                onClick={() => setShowSettings(false)}
                className="w-full mt-10 bg-[#5A5A40] text-white py-4 rounded-2xl font-sans font-bold shadow-lg"
              >
                Вернуться к обучению
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}

function renderTextWithLevel(text: string, level: number) {
  const words = text.split(/\s+/);

  if (level === 0) return <p className="text-[#1A1A1A] font-medium leading-relaxed">{text.split(' ').join(' ')}</p>;

  return (
    <p className="text-[#1A1A1A] leading-relaxed">
      {words.map((word, i) => {
        // Don't mask the knee delimiters
        if (word === '/') {
          return <span key={i} className="text-[#5A5A40]/30 mx-2 font-sans">/</span>;
        }

        let content: React.ReactNode = word;
        let isMasked = false;

        if (level === 1) isMasked = i % 3 === 2;
        if (level === 2) isMasked = i % 2 === 1;
        if (level === 3) {
            // First letters only
            const firstLetter = word[0];
            const rest = word.slice(1).replace(/[а-яА-ЯёЁa-zA-Z]/g, '·');
            content = (
              <span>
                <span className="font-bold text-[#5A5A40]">{firstLetter}</span>
                {rest}
              </span>
            );
            isMasked = false;
        }
        if (level === 4) isMasked = true;

        if (isMasked) {
          return (
            <React.Fragment key={i}>
              <span className="hidden-text-block group cursor-pointer relative inline-block align-middle mx-1">
                <span className="bg-[#5A5A40] text-[#5A5A40] rounded px-2 select-none transition-all group-hover:bg-transparent group-hover:text-inherit">
                  {word}
                </span>
                <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-[#5A5A40] text-[#FDFCFB] text-[10px] py-1.5 px-3 rounded-lg opacity-0 group-hover:opacity-100 pointer-events-none transition-all shadow-xl font-sans font-bold whitespace-nowrap z-50">
                  {word}
                </span>
              </span>
              {' '}
            </React.Fragment>
          );
        }

        return <span key={i} className="inline-block mx-0.5">{content} </span>;
      })}
    </p>
  );
}
