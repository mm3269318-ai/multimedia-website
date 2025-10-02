// JavaScript للتحقق من توفر ملفات الوسائط
document.addEventListener('DOMContentLoaded', function() {
    // التحقق من الصوت
    const audio = document.querySelector('audio');
    if (audio) {
        audio.addEventListener('error', function() {
            console.log('Audio failed to load, trying fallback...');
            // يمكن إضافة مصادر بديلة هنا
        });
    }
    
    // التحقق من الفيديوهات
    const videos = document.querySelectorAll('video');
    videos.forEach(video => {
        video.addEventListener('error', function() {
            console.log('Video failed to load:', this.src);
            // يمكن إضافة مصادر بديلة هنا
        });
    });
    
    // إضافة رسالة للمستخدم إذا فشل التحميل
    function showMediaError() {
        const errorDiv = document.createElement('div');
        errorDiv.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: #ff4444;
            color: white;
            padding: 10px;
            border-radius: 5px;
            z-index: 1000;
        `;
        errorDiv.textContent = 'مشكلة في تحميل الوسائط - جرب تحديث الصفحة';
        document.body.appendChild(errorDiv);
        
        setTimeout(() => {
            errorDiv.remove();
        }, 5000);
    }
    
    // التحقق من تحميل الصفحة
    window.addEventListener('load', function() {
        setTimeout(() => {
            const audio = document.querySelector('audio');
            const videos = document.querySelectorAll('video');
            
            if (audio && audio.readyState === 0) {
                showMediaError();
            }
            
            videos.forEach(video => {
                if (video.readyState === 0) {
                    showMediaError();
                }
            });
        }, 3000);
    });
});
