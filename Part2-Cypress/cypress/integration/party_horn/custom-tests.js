describe('Party Horn Tests', () => {
  beforeEach(() => {
    cy.visit('http://127.0.0.1:5500/');
  });

  it('First Test', () => {
    expect(true).to.equal(true);
  });

  it('Slider changes when volume input changes', () => {
    cy.get('#volume-number').clear().type('75');
    cy.get('#volume-slider').then(($el) => {
      expect($el).to.have.value(75);
    });
  });

  it('Volume number changes when slider input changes', () => {
    cy.get('#volume-slider').invoke('val', 33).trigger('input');
    cy.get('#volume-number').then(($el) => {
      expect($el).to.have.value(33);
    });
  });

  it('audio volume changes when slider changes', () => {
    cy.get('#volume-slider').invoke('val', 33).trigger('input');
    cy.get('#horn-sound').then(($el) => {
      expect($el).to.have.prop('volume', 0.33);
    });
  });

  it('image/sound changes when party horn button is selected', () => {
    cy.get('#radio-party-horn').check();

    cy.get('#sound-image').then(($el) => {
      expect($el).attr('src', './assets/media/images/party-horn.svg');
    });

    cy.get('#horn-sound').then(($el) => {
      expect($el).attr('src', './assets/media/audio/party-horn.mp3');
    });
  });

  it('volume icon changes with volumes', () => {
    // volume set to 0
    cy.get('#volume-number').clear().type('0');
    cy.get('#volume-image').then(($el) => {
      expect($el).attr('src', './assets/media/icons/volume-level-0.svg');
    });
    // volumes 1 through 33
    for (let i = 1; i < 34; i++) {
      cy.get('#volume-number').clear().type(String(i));

      cy.get('#volume-image').then(($el) => {
        expect($el).attr('src', './assets/media/icons/volume-level-1.svg');
      });
    }
    // volumes 34 through 66
    for (let i = 34; i < 67; i++) {
      cy.get('#volume-number').clear().type(String(i));

      cy.get('#volume-image').then(($el) => {
        expect($el).attr('src', './assets/media/icons/volume-level-2.svg');
      });
    }
    // volumes 67 through 100
    for (let i = 67; i <= 100; i++) {
      cy.get('#volume-number').clear().type(String(i));

      cy.get('#volume-image').then(($el) => {
        expect($el).attr('src', './assets/media/icons/volume-level-3.svg');
      });
    }   
  });

  it('honk button disabled when text input empty or non-number', () => {
    cy.get('#volume-number').clear();
    cy.get('#honk-btn').then(($el) => {
      expect($el).prop('disabled', true);
    });

    cy.get('#volume-number').clear().type('non-number');
    cy.get('#honk-btn').then(($el) => {
      expect($el).prop('disabled', true);
    });
  });

  it('error is shown when text input is an invalid number', () => {
    cy.get('#volume-number').clear().type('101');
    cy.get('#volume-number').then(($el) => {
      expect($el[0].checkValidity()).to.equal(false);
    });

    cy.get('#volume-number').clear().type('-1');
    cy.get('#volume-number').then(($el) => {
      expect($el[0].checkValidity()).to.equal(false);
    });
  });

});
