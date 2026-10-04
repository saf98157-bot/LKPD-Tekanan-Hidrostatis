// LKPD Tekanan Hidrostatis - Interactive Script

document.addEventListener('DOMContentLoaded', function() {
  console.log('LKPD Tekanan Hidrostatis loaded successfully!');
  
  // Auto-save functionality
  const textareas = document.querySelectorAll('textarea');
  const inputs = document.querySelectorAll('input');
  
  const saveData = () => {
    const data = {};
    textareas.forEach(ta => {
      data[ta.placeholder] = ta.value;
    });
    inputs.forEach(inp => {
      data[inp.placeholder || inp.value] = inp.value;
    });
    localStorage.setItem('lkpd-data', JSON.stringify(data));
  };
  
  const loadData = () => {
    const saved = localStorage.getItem('lkpd-data');
    if (saved) {
      const data = JSON.parse(saved);
      textareas.forEach(ta => {
        if (data[ta.placeholder]) ta.value = data[ta.placeholder];
      });
      inputs.forEach(inp => {
        const key = inp.placeholder || inp.value;
        if (data[key]) inp.value = data[key];
      });
    }
  };
  
  loadData();
  
  textareas.forEach(ta => {
    ta.addEventListener('input', saveData);
  });
  
  inputs.forEach(inp => {
    inp.addEventListener('change', saveData);
  });
  
  // Print functionality
  window.addEventListener('keydown', (e) => {
    if (e.ctrlKey && e.key === 'p') {
      e.preventDefault();
      window.print();
    }
  });
  
  console.log('Auto-save dan print functionality enabled!');
});