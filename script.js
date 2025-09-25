// تهيئة الصفحة عند التحميل
document.addEventListener('DOMContentLoaded', function() {
    // تهيئة المحاور التفصيلية للدورات
    initializeCourseTopics();
    
    // إضافة تأثير الظهور عند التمرير
    initScrollAnimations();
    
    // إعداد المودالات
    setupModals();
    
    // إعداد التبويبات
    setupTabs();
});

// تهيئة محاور الدورات
function initializeCourseTopics() {
    // محاور دورة Excel
    const excelTopics = [
        "Part 1: Getting Started with Microsoft Office Excel 2019",
        "Part 2: Performing Calculations",
        "Part 3: Modifying a Worksheet",
        "Part 4: Formatting a Worksheet",
        "Part 5: Preview and Print a Workbook",
        "Part 6: Managing Workbooks",
        "Part 7: Working with Functions",
        "Part 8: Working with Lists",
        "Part 9: Analyzing Data",
        "Part 10: Visualizing Data with Charts",
        "Part 11: Analyzing Data with PivotTables and Pivot Charts",
        "Part 12: Working with Multiple Worksheets and Workbooks",
        "Part 13: Using Lookup Functions and Formula Auditing",
        "Part 14: Sharing and Protecting Workbooks",
        "Part 15: Automating Workbook Functionality"
    ];

    // محاور دورة Power BI
    const powerBITopics = [
        "Module 1: Power BI Fundamentals",
        "Module 2: Data Acquisition and Preparation",
        "Module 3: Building Interactive Reports",
        "Module 4: Data Modeling",
        "Module 5: Advanced Analytics",
        "Module 6: Sharing and Collaborating",
        "Module 7: Power BI Web App"
    ];

    const excelTopicsList = document.querySelector('#excel-modal .topics-list');
    const powerBITopicsList = document.querySelector('#powerbi-modal .modules-list');

    // إضافة محاور Excel
    excelTopics.forEach((topic, index) => {
        const li = document.createElement('li');
        li.textContent = topic;
        excelTopicsList.appendChild(li);
    });

    // إضافة محاور Power BI
    powerBITopics.forEach((topic, index) => {
        const li = document.createElement('li');
        li.textContent = topic;
        powerBITopicsList.appendChild(li);
    });
}

// إعداد تأثيرات الظهور عند التمرير
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    }, observerOptions);

    // مراقبة العناصر لإضافة تأثير الظهور
    const elementsToAnimate = document.querySelectorAll('.course-card, .instructor-content, .step');
    elementsToAnimate.forEach(el => {
        observer.observe(el);
    });
}

// إعداد المودالات
function setupModals() {
    const modals = document.querySelectorAll('.modal');
    const detailBtns = document.querySelectorAll('.details-btn');
    const closeBtns = document.querySelectorAll('.close');

    // فتح المودال
    detailBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const courseType = this.getAttribute('data-course');
            const modal = document.getElementById(`${courseType}-modal`);
            modal.style.display = 'block';
            document.body.style.overflow = 'hidden';
        });
    });

    // إغلاق المودال
    closeBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const modal = this.closest('.modal');
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        });
    });

    // إغلاق عند النقر خارج المحتوى
    modals.forEach(modal => {
        modal.addEventListener('click', function(e) {
            if (e.target === this) {
                this.style.display = 'none';
                document.body.style.overflow = 'auto';
            }
        });
    });

    // إغلاق بالزر Escape
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            modals.forEach(modal => {
                modal.style.display = 'none';
                document.body.style.overflow = 'auto';
            });
        }
    });
}

// إعداد التبويبات داخل المودالات
function setupTabs() {
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('tab-btn')) {
            const tabBtn = e.target;
            const modal = tabBtn.closest('.modal-content');
            const tabName = tabBtn.getAttribute('data-tab');
            
            // إزالة النشاط من جميع الأزرار
            modal.querySelectorAll('.tab-btn').forEach(btn => {
                btn.classList.remove('active');
            });
            
            // إضافة النشاط للزر المحدد
            tabBtn.classList.add('active');
            
            // إخفاء جميع المحتويات
            modal.querySelectorAll('.tab-content').forEach(content => {
                content.classList.remove('active');
            });
            
            // إظهار المحتوى المحدد
            const targetContent = modal.querySelector(`#${tabName}-tab`);
            if (targetContent) {
                targetContent.classList.add('active');
            }
        }
    });
}

// التنقل السلس
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// تأثيرات Hover للأزرار
document.querySelectorAll('.cta-btn, .details-btn, .step-btn, .linkedin-btn').forEach(btn => {
    btn.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-2px)';
        this.style.boxShadow = '0 6px 12px rgba(0,0,0,0.15)';
    });
    
    btn.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
        this.style.boxShadow = '0 4px 6px rgba(0,0,0,0.1)';
    });
});
