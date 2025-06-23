// FPS 模擬更新
function updateFPS() {
    const fps = Math.floor(Math.random() * (60 - 30 + 1)) + 30; // 隨機生成 FPS 值 (30-60)
    document.getElementById('fps-value').textContent = fps;
    setTimeout(updateFPS, 1000); // 每秒更新
  }
  
  // 切換滑桿顯示
  function toggleSlider(id, button) {
    const slider = document.getElementById(id);
    const isVisible = slider.style.display !== 'none';
    slider.style.display = isVisible ? 'none' : 'block';
    button.classList.toggle('active', !isVisible);
  }
  
  // 切換按鈕狀態動畫
  function toggleAnimation(button) {
    button.classList.toggle('active');
  }
  
  // 更新滑桿值
  function updateValue(id, value) {
    document.getElementById(id).textContent = value;
  }
  
  // 初始化 FPS 更新
  updateFPS();
  