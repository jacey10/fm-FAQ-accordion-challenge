const buttons = document.querySelectorAll('.accordion--btn');

buttons.forEach(button => {
    button.addEventListener('click', () => {

        const expanded = button.getAttribute('aria-expanded') === 'true';
        
        buttons.forEach(btn => { 
            btn.setAttribute('aria-expanded', false);
            document.getElementById(btn.getAttribute('aria-controls')).hidden = true;
        })

        button.setAttribute('aria-expanded', !expanded);
        document.getElementById(button.getAttribute('aria-controls')).hidden = expanded;
        
    })
})