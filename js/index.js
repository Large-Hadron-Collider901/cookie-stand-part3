

document.body.addEventListener('mouseover', function(e) {
    const seattleDropDown = document.querySelector('#seattle');
    const tokyoDropDown = document.querySelector('#tokyo');
    const dubaiDropDown = document.querySelector('#dubai');
    const parisDropDown = document.querySelector('#paris');
    const limaDropDown = document.querySelector('#lima');
      if (e.target.closest('#seattle')) {
        seattleDropDown.classList.remove('closed');
      }
      if (e.target.closest('#tokyo')) {
        tokyoDropDown.classList.remove('closed');
      }
      if (e.target.closest('#dubai')) {
        dubaiDropDown.classList.remove('closed');
      }
      if (e.target.closest('#paris')) {
        parisDropDown.classList.remove('closed');
      }
      if (e.target.closest('#lima')) {
        limaDropDown.classList.remove('closed');
      }
    });
    
    document.body.addEventListener('mouseout', function(e) {
    const seattleDropDown = document.querySelector('#seattle');
    const tokyoDropDown = document.querySelector('#tokyo');
    const dubaiDropDown = document.querySelector('#dubai');
    const parisDropDown = document.querySelector('#paris');
    const limaDropDown = document.querySelector('#lima');
      if (e.target.closest('#seattle')) {
        seattleDropDown.classList.add('closed');
      }
      if (e.target.closest('#tokyo')) {
        tokyoDropDown.classList.add('closed');
      }
      if (e.target.closest('#dubai')) {
        dubaiDropDown.classList.add('closed');
      }
      if (e.target.closest('#paris')) {
        parisDropDown.classList.add('closed');
      }
      if (e.target.closest('#lima')) {
        limaDropDown.classList.add('closed');
      }
    })