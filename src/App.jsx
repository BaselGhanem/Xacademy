import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { ChevronDown, ChevronUp, BookOpen, BarChart3, Star, Users, Award, ArrowLeft, Phone, MessageCircle, User } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import baselImage from './assets/basel_ghanem.jpg'
import './App.css'

function App() {
  const [expandedCourse, setExpandedCourse] = useState(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [particles, setParticles] = useState([])

  // Mouse tracking for particles
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
      
      // Create particle
      const particle = {
        id: Date.now() + Math.random(),
        x: e.clientX,
        y: e.clientY
      }
      
      setParticles(prev => [...prev.slice(-10), particle])
      
      // Remove particle after animation
      setTimeout(() => {
        setParticles(prev => prev.filter(p => p.id !== particle.id))
      }, 2000)
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const excelOutline = [
    {
      title: "Part 1: Getting Started with Microsoft Office Excel 2019",
      items: [
        "Navigate the Excel User Interface",
        "Use Excel Commands",
        "Create and Save a Basic Workbook",
        "Enter Cell Data"
      ]
    },
    {
      title: "Part 2: Performing Calculations",
      items: [
        "Create Worksheet Formulas",
        "Insert Functions"
      ]
    },
    {
      title: "Part 3: Modifying a Worksheet",
      items: [
        "Insert, Delete, and Adjust Cells, Columns, and Rows",
        "Search for and Replace Data",
        "Use Proofing and Research Tools"
      ]
    },
    {
      title: "Part 4: Formatting a Worksheet",
      items: [
        "Apply Text Formats",
        "Apply Number Formats",
        "Align Cell Contents",
        "Apply Styles and Themes",
        "Apply Basic Conditional Formatting",
        "Preview and Print a Workbook",
        "Set Up the Page Layout",
        "Configure Headers and Footers"
      ]
    },
    {
      title: "Part 6: Managing Workbooks",
      items: [
        "Manage Worksheets",
        "Manage Workbook and Worksheet Views",
        "Manage Workbook Properties"
      ]
    },
    {
      title: "Part 7: Working with Functions",
      items: [
        "Work with Ranges",
        "Work with logical functions & Date & Time Functions",
        "Work with Text Functions"
      ]
    },
    {
      title: "Part 8: Working with Lists",
      items: [
        "Sort Data",
        "Filter Data",
        "Outline and Subtotal Data"
      ]
    },
    {
      title: "Part 9: Analyzing Data",
      items: [
        "Create and Modify Tables",
        "Apply Conditional Formatting"
      ]
    },
    {
      title: "Part 10: Visualizing Data with Charts",
      items: [
        "Create Charts",
        "Modify and Format Charts",
        "Use Advanced Chart Features"
      ]
    },
    {
      title: "Part 11: Analyzing Data with PivotTables and Pivot Charts",
      items: [
        "Create a PivotTable",
        "Analyze PivotTable Data",
        "Present Data with Pivot Charts",
        "Filter Data by Using Timelines and Slicers"
      ]
    },
    {
      title: "Part 12: Working with Multiple Worksheets and Workbooks",
      items: [
        "Use Links and External References"
      ]
    },
    {
      title: "Part 13: Using Lookup Functions and Formula Auditing",
      items: [
        "Use Lookup Functions",
        "Trace Cells",
        "Watch and Evaluate Formulas"
      ]
    },
    {
      title: "Part 14: Sharing and Protecting Workbooks",
      items: [
        "Collaborate on a Workbook",
        "Protect Worksheets and Workbooks"
      ]
    },
    {
      title: "Part 15: Automating Workbook Functionality",
      items: [
        "Apply Data Validation",
        "Search for Invalid Data and Formulas with Errors",
        "New formulas",
        "Dashboard creating"
      ]
    }
  ]

  const powerBIOutline = [
    {
      title: "Module 1: Power BI Fundamentals",
      items: [
        "Introduction to Power BI",
        "Understanding Power BI components",
        "Navigating the Power BI Desktop interface",
        "Staying updated with Power BI developments"
      ]
    },
    {
      title: "Module 2: Data Acquisition and Preparation",
      items: [
        "Connecting to various data sources (Excel, Access, etc.)",
        "Creating manual datasets",
        "Importing and shaping data using the Query Editor",
        "Cleaning and transforming data for analysis"
      ]
    },
    {
      title: "Module 3: Building Interactive Reports",
      items: [
        "Creating engaging visualizations",
        "Formatting and customizing visuals",
        "Interacting with reports for exploration",
        "Adding static elements to reports"
      ]
    },
    {
      title: "Module 4: Data Modeling",
      items: [
        "Understanding DAX (Data Analysis Expressions)",
        "Creating calculated columns and measures",
        "Building relationships between data tables"
      ]
    },
    {
      title: "Module 5: Advanced Analytics",
      items: [
        "Performing time series analysis",
        "Identifying outliers and anomalies",
        "Grouping and binning data",
        "Leveraging AI and machine learning insights"
      ]
    },
    {
      title: "Module 6: Sharing and Collaborating",
      items: [
        "Creating and managing report pages",
        "Customizing report views",
        "Publishing reports to the Power BI service",
        "Creating interactive dashboards"
      ]
    },
    {
      title: "Module 7: Power BI Web App",
      items: [
        "Exploring the Power BI web app",
        "Connecting to data and creating reports",
        "Collaborating with team members",
        "Utilizing web app features (insights, Q&A)"
      ]
    }
  ]

  const toggleCourse = (courseId) => {
    setExpandedCourse(expandedCourse === courseId ? null : courseId)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white font-arabic overflow-x-hidden">
      {/* Mouse Particles */}
      {particles.map(particle => (
        <div
          key={particle.id}
          className="particle"
          style={{
            left: particle.x,
            top: particle.y
          }}
        />
      ))}

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
        {/* Background Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-teal-500/5 to-blue-500/10"></div>
        
        {/* Floating Background Elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-cyan-400/20 to-teal-400/20 rounded-full blur-3xl hero-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-blue-400/20 to-cyan-400/20 rounded-full blur-3xl hero-float" style={{animationDelay: '2s'}}></div>
        
        <div className="relative z-10 text-center max-w-6xl mx-auto">
          <motion.h1 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="hero-title text-5xl md:text-7xl font-bold mb-6 gradient-text leading-tight"
          >
            ارتقِ بمهاراتك مع X Academy
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
            className="hero-subtitle text-xl md:text-2xl mb-12 text-slate-300 max-w-4xl mx-auto leading-relaxed"
          >
            دورات احترافية في Excel و Power BI لتصبح خبير بيانات متميز
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            className="flex flex-col sm:flex-row justify-center items-center gap-4"
          >
            <Button 
              className="btn-primary text-xl px-12 py-6 rounded-2xl font-bold text-white border-0 pulse-glow"
              onClick={() => document.getElementById('courses').scrollIntoView({ behavior: 'smooth' })}
            >
              تصفح دوراتنا
              <ArrowLeft className="mr-3 h-6 w-6" />
            </Button>
            <Button 
              className="btn-primary text-xl px-12 py-6 rounded-2xl font-bold text-white border-0 bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700"
              onClick={() => document.getElementById('instructor').scrollIntoView({ behavior: 'smooth' })}
            >
              عن المدرب
              <User className="mr-3 h-6 w-6" />
            </Button>
          </motion.div>

          {/* Stats Section */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1, ease: "easeOut" }}
            className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
          >
            <div className="glass rounded-2xl p-6 text-center">
              <Users className="h-12 w-12 text-cyan-400 mx-auto mb-4" />
              <div className="text-3xl font-bold text-white mb-2">+1400</div>
              <div className="text-slate-300">متدرب متميز</div>
            </div>
            <div className="glass rounded-2xl p-6 text-center">
              <Award className="h-12 w-12 text-teal-400 mx-auto mb-4" />
              <div className="text-3xl font-bold text-white mb-2">98%</div>
              <div className="text-slate-300">معدل الرضا</div>
            </div>
            <div className="glass rounded-2xl p-6 text-center">
              <Star className="h-12 w-12 text-yellow-400 mx-auto mb-4" />
              <div className="text-3xl font-bold text-white mb-2">4.7</div>
              <div className="text-slate-300">تقييم الطلاب</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Instructor Section */}
      <section id="instructor" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text">عن المدرب</h2>
            <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto">
              تعرف على المدرب المحترف الذي سيقودك نحو التميز
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="glass rounded-3xl p-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          >
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-teal-500 rounded-full blur-lg opacity-30 animate-pulse"></div>
                <img 
                  src={baselImage} 
                  alt="Basel Ghanem"
                  className="relative z-10 w-72 h-72 md:w-80 md:h-80 rounded-full object-cover shadow-2xl border-4 border-slate-700"
                />
              </div>
            </div>
            <div className="text-center lg:text-right space-y-6">
              <h3 className="text-3xl md:text-4xl font-bold gradient-text">باسل غانم | Basel Ghanem</h3>
              <p className="text-slate-300 text-lg leading-relaxed">
                مدرب محترف ومعتمد من مايكروسوفت، متخصص في تقديم برامج تدريبية مخصصة ومتقدمة في برنامجي Excel و Power BI. لدي خبرة واسعة في تدريب المحترفين في مختلف القطاعات والصناعات، حيث يتم تصميم المحتوى التدريبي ليناسب الاحتياجات الدقيقة لكل مجال.
              </p>
              <p className="text-slate-300 text-lg leading-relaxed">
                تركز الدورات على تزويد المشاركين بمهارات عملية ومتكاملة في إدارة وتحليل وتصوير البيانات، بدءًا من المستويات الأساسية وصولاً إلى التقنيات المتقدمة. المنهجية المتبعة تفاعلية وعملية بالدرجة الأولى، لضمان اكتساب القدرة على استخدام هذه الأدوات بفعالية.
              </p>
              <a 
                href="https://www.linkedin.com/in/baselghanem/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center text-teal-400 hover:text-teal-300 transition-colors duration-300"
              >
                <ArrowLeft className="ml-2 h-5 w-5" />
                عرض الملف الشخصي على LinkedIn
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Courses Section */}
      <section id="courses" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text">دوراتنا الاحترافية</h2>
            <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto">
              اختر الدورة التي تناسب احتياجاتك وابدأ رحلتك نحو الاحتراف
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Excel Course */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="course-card glass rounded-3xl p-8"
            >
              <div className="flex items-center mb-6 justify-between">
                <div className="text-right">
                  <h3 className="text-2xl font-bold text-white">Excel Course</h3>
                  <p className="text-slate-300">من الأساسيات إلى الاحتراف</p>
                </div>
                <div className="bg-gradient-to-r from-green-400 to-emerald-500 p-4 rounded-2xl ml-4">
                  <BookOpen className="h-8 w-8 text-white" />
                </div>
              </div>
              
              <p className="text-slate-300 mb-6 leading-relaxed text-right">
                تعلم Excel من الصفر حتى الاحتراف مع التركيز على التطبيقات العملية والمشاريع الواقعية
              </p>
              
              <Button 
                onClick={() => toggleCourse('excel')}
                className="w-full bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white border-0 py-3 rounded-xl font-semibold transition-all duration-300"
              >
                {expandedCourse === 'excel' ? 'إخفاء المحتوى' : 'عرض محتوى الدورة'}
                {expandedCourse === 'excel' ? 
                  <ChevronUp className="ml-2 h-5 w-5" /> : 
                  <ChevronDown className="ml-2 h-5 w-5" />
                }
              </Button>

              <AnimatePresence>
                {expandedCourse === 'excel' && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className="mt-6 course-outline"
                  >
                    {excelOutline.map((part, index) => (
                      <div key={index} className="part mb-6 bg-slate-800/50 rounded-xl p-4">
                        <h4 className="font-semibold text-green-400 mb-3 text-right">{part.title}</h4>
                        <ul className="space-y-2 text-right">
                          {part.items.map((item, itemIndex) => (
                            <li key={itemIndex} className="text-slate-300 text-sm flex items-start justify-end">
                              {item}
                              <span className="text-green-400 mr-2">•</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>

            {/* Power BI Course */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="course-card glass rounded-3xl p-8"
            >
              <div className="flex items-center mb-6 justify-between">
                <div className="text-right">
                  <h3 className="text-2xl font-bold text-white">Power BI Course</h3>
                  <p className="text-slate-300">تحليل البيانات والذكاء الاصطناعي</p>
                </div>
                <div className="bg-gradient-to-r from-orange-400 to-red-500 p-4 rounded-2xl ml-4">
                  <BarChart3 className="h-8 w-8 text-white" />
                </div>
              </div>
              
              <p className="text-slate-300 mb-6 leading-relaxed text-right">
                احترف Power BI وتعلم كيفية تحويل البيانات إلى رؤى قابلة للتنفيذ مع لوحات معلومات تفاعلية
              </p>
              
              <Button 
                onClick={() => toggleCourse('powerbi')}
                className="w-full bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white border-0 py-3 rounded-xl font-semibold transition-all duration-300"
              >
                {expandedCourse === 'powerbi' ? 'إخفاء المحتوى' : 'عرض محتوى الدورة'}
                {expandedCourse === 'powerbi' ? 
                  <ChevronUp className="ml-2 h-5 w-5" /> : 
                  <ChevronDown className="ml-2 h-5 w-5" />
                }
              </Button>

              <AnimatePresence>
                {expandedCourse === 'powerbi' && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className="mt-6 course-outline"
                  >
                    <div className="mb-6 bg-slate-800/50 rounded-xl p-4 text-right">
                      <h4 className="font-semibold text-orange-400 mb-3">Course Overview</h4>
                      <p className="text-slate-300 text-sm leading-relaxed">
                        This course empowers you to transform raw data into actionable insights using Power BI. 
                        You'll learn to create compelling reports, conduct in-depth analysis, and leverage advanced 
                        features to uncover hidden patterns and trends. By the end of this course, you'll be equipped 
                        to make data-driven decisions with confidence.
                      </p>
                    </div>

                    <div className="mb-6 bg-slate-800/50 rounded-xl p-4 text-right">
                      <h4 className="font-semibold text-orange-400 mb-3">Who Should Attend</h4>
                      <ul className="space-y-2">
                        <li className="text-slate-300 text-sm flex items-start justify-end">
                          Data analysts and report creators
                          <span className="text-orange-400 mr-2">•</span>
                        </li>
                        <li className="text-slate-300 text-sm flex items-start justify-end">
                          Business professionals seeking to understand their data
                          <span className="text-orange-400 mr-2">•</span>
                        </li>
                        <li className="text-slate-300 text-sm flex items-start justify-end">
                          Students and researchers interested in data-driven insights
                          <span className="text-orange-400 mr-2">•</span>
                        </li>
                        <li className="text-slate-300 text-sm flex items-start justify-end">
                          Individuals in market research, customer analytics, or humanitarian sectors
                          <span className="text-orange-400 mr-2">•</span>
                        </li>
                      </ul>
                    </div>

                    {powerBIOutline.map((module, index) => (
                      <div key={index} className="part mb-6 bg-slate-800/50 rounded-xl p-4">
                        <h4 className="font-semibold text-orange-400 mb-3 text-right">{module.title}</h4>
                        <ul className="space-y-2 text-right">
                          {module.items.map((item, itemIndex) => (
                            <li key={itemIndex} className="text-slate-300 text-sm flex items-start justify-end">
                              {item}
                              <span className="text-orange-400 mr-2">•</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="glass rounded-3xl p-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text">
              سجل الآن لتبدأ رحلتك نحو الاحتراف
            </h2>
            <p className="text-lg md:text-xl text-slate-300 mb-8 leading-relaxed">
              انضم إلى مئات المتدربين الذين حققوا نجاحاً باهراً في مجال تحليل البيانات
            </p>
            <Button 
              className="btn-primary text-xl px-12 py-6 rounded-2xl font-bold text-white border-0"
              onClick={() => document.getElementById('registration').scrollIntoView({ behavior: 'smooth' })}
            >
              ابدأ التسجيل
              <ArrowLeft className="ml-3 h-6 w-6" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Registration Steps */}
      <section id="registration" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text">خطوات التسجيل والانضمام</h2>
            <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto">
              عملية تسجيل سهلة ومباشرة لتبدأ رحلتك التعليمية
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Step 1 */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="glass rounded-3xl p-8 text-center"
            >
              <div className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6 text-3xl font-bold shadow-lg">
                1
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">الخطوة 1: تعبئة النموذج</h3>
              <p className="text-slate-300 mb-8 leading-relaxed">
                املأ نموذج التسجيل بمعلوماتك لضمان مقعدك في الدورة القادمة.
              </p>
              <a 
                href="https://forms.office.com/r/yzYJJCqhV0"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center btn-primary text-xl px-8 py-4 rounded-xl font-semibold text-white border-0"
              >
                نموذج التسجيل
                <ArrowLeft className="ml-3 h-6 w-6" />
              </a>
            </motion.div>

            {/* Step 2 */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="glass rounded-3xl p-8 text-center"
            >
              <div className="bg-gradient-to-r from-teal-500 to-green-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6 text-3xl font-bold shadow-lg">
                2
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">الخطوة 2: تأكيد الدفع</h3>
              <p className="text-slate-300 mb-4 leading-relaxed">
                قم بتحويل رسوم الدورة عبر خدمة "كليك" باستخدام اسم المستخدم التالي:
              </p>
              <div className="bg-slate-800/70 rounded-xl p-4 font-mono text-2xl font-bold text-teal-400 shadow-inner">
                XAcademy (Etihad Bank)
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-slate-700/50 text-center">
        <div className="max-w-6xl mx-auto">
          <div className="text-3xl font-bold gradient-text mb-4">X Academy</div>
          <p className="text-slate-400 mb-6">ارتقِ بمهاراتك مع أفضل الدورات التدريبية</p>
          
          <div className="text-slate-400 mb-6 space-y-2">
            <p className="flex items-center justify-center">
              <Phone className="ml-2 h-5 w-5 text-teal-400" />
              للاستفسارات أو للدورات الفردية يرجى الاتصال على رقم: 00962788458787
            </p>
            <p className="flex items-center justify-center">
              <MessageCircle className="ml-2 h-5 w-5 text-green-400" />
              أو مراسلتنا عبر واتساب على نفس الرقم
            </p>
          </div>

          <div className="text-sm text-slate-500">
            © 2025 X Academy. جميع الحقوق محفوظة.
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App

