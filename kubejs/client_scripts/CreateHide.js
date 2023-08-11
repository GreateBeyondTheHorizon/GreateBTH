REIEvents.hide('item', event => {

    const sheet = ['create:iron_sheet','create:brass_sheet','create:copper_sheet','create:golden_sheet']
    

    sheet.forEach((element) => event.hide(element));
    
  })