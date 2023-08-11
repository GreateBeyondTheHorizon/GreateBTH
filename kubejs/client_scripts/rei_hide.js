REIEvents.hide('item', event => {






    //Create
    const sheet = ['create:iron_sheet','create:brass_sheet','create:copper_sheet','create:golden_sheet']
    sheet.forEach((element) => event.hide(element));

    //Wands
    event.hide('constructionwand:core_angel')
    event.hide('constructionwand:core_destruction')

    //TomSimpleStorage
    const storage = ['toms_storage:ts.inventory_proxy','toms_storage:ts.open_crate', 'toms_storage:ts.inventory_hopper_basic', 'toms_storage:ts.level_emitter', 'toms_storage:ts.painted_trim', 'toms_storage:ts.storage_terminal', 'toms_storage:ts.adv_wireless_terminal']
    storage.forEach((element) => event.hide(element));


  })