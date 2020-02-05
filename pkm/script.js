/* Coded by Eren SOYLU @ 2016 
This frontend aims getting data from Google Spreadsheets with .getJSON method and uses that data in jQuery DataTables
*/

function getGeneration(pokemon_no){
  var generation = "";
  if (pokemon_no < 152){
    generation = "gen1";
  }else if (pokemon_no > 151 && pokemon_no < 252){
    generation = "gen2";
  }else if (pokemon_no > 251 && pokemon_no < 387){
    generation = "gen3";
  }else if (pokemon_no > 386 && pokemon_no < 494){
    generation = "gen4";
  }else if (pokemon_no > 493 && pokemon_no < 650){
    generation = "gen5";
  }else if (pokemon_no > 649 && pokemon_no < 722){
    generation = "gen6";
  }else if (pokemon_no > 721 && pokemon_no < 810){
    generation = "gen7";
  }else{
    generation = "gen8";
  }
  return generation;
}
// window.checkPoke = ()=>2;

$(document).ready(function() {	  


  // Config header
	  $("div.pkTitle").html(sheet_title);
	  $("div.pkTrainerProfile").html("<img src='" + trainer_image + "' width='64' height='64' style='background:white; border:#ccc 5px solid; padding:2px; margin-right:10px;'>");
	  $("div.pkTrainerName").html("<b>IGN:</b>  " + trainer_name + "</br>" + "<b>FC:</b>  " + trainer_fc);	  
	  $("div.pkTrainerNote").html(trainer_note);

  //  Show hide thingies
		if(show_pokemon_nature != false){
			$("div.pkNatureSelected").css({"display": "none"});
		}
		if(show_pokemon_ball == false){
			$("div.pkBallSelected").css({"display": "none"});
		}
		if(show_pokemon_egg_moves == false){
			$("div.pkEggMovesSelected").css({"display": "none"});
		}
		if(show_pokemon_ability == false){
			$("div.pkHiddenAbilitySelected").css({"display": "none"});
		}
		if(show_pokemon_ability == false && show_pokemon_egg_moves == false){
			$("div.pkOthersSelected").css({"display": "none"});
		}
		
      var tableArray = [];

  // Get data from spreadsheet
  $.getJSON(url, function(json) {
    for (var i = 0; i < json.feed.entry.length; i++) {
      var iArray = [];
      pokemon_name = json.feed.entry[i].gsx$pokemon.$t;	  
      pokemon_no = (json.feed.entry[i].gsx$no.$t).padStart(3, '0');
		  iArray.push(json.feed.entry[i].gsx$no.$t); 
      sprite = pokemon_no;
      if(pokemon_name.includes('-Galar')) sprite=pokemon_no+'-g';
      if(pokemon_name.includes('-Alola')) sprite=pokemon_no+'-a';
      iArray.push('<img class="pkSprite" src="https://serebii.net/pokedex-swsh/icon/'+sprite+'.png"><span style="display:none;">' + json.feed.entry[i].gsx$pokemon.$t + '</span>');
		  var generation = "";
      generation = getGeneration(pokemon_no);
      iArray.push('<b>' + json.feed.entry[i].gsx$pokemon.$t + '</b><span style="display:none;">' + generation + '</span>');
		  var safari_ball = '<span><img src="https://cdn.bulbagarden.net/upload/e/eb/Bag_Safari_Ball_Sprite.png" alt="Safari Ball" title="Safari Ball"></span><span style="display:none;">Safari Ball</span>';
		  var sport_ball = '<span><img src="https://cdn.bulbagarden.net/upload/3/3e/Bag_Sport_Ball_Sprite.png" alt="Sport Ball" title="Sport Ball"></span><span style="display:none;">Sport Ball</span>';
		  var fast_ball = '<span><img src="https://cdn.bulbagarden.net/upload/7/70/Bag_Fast_Ball_Sprite.png" alt="Fast Ball" title="Fast Ball"></span><span style="display:none;">Fast Ball</span>';
		  var friend_ball = '<span><img src="https://cdn.bulbagarden.net/upload/1/17/Bag_Friend_Ball_Sprite.png" alt="Friend Ball" title="Friend Ball"></span><span style="display:none;">Friend Ball</span>';
		  var heavy_ball = '<span><img src="https://cdn.bulbagarden.net/upload/7/74/Bag_Heavy_Ball_Sprite.png" alt="Heavy Ball" title="Heavy Ball"></span><span style="display:none;">Heavy Ball</span>';
		  var level_ball = '<span><img src="https://cdn.bulbagarden.net/upload/d/df/Bag_Level_Ball_Sprite.png" alt="Level Ball" title="Level Ball"></span><span style="display:none;">Level Ball</span>';
		  var love_ball = '<span><img src="https://cdn.bulbagarden.net/upload/4/42/Bag_Love_Ball_Sprite.png" alt="Love Ball" title="Love Ball"></span><span style="display:none;">Love Ball</span>';
		  var lure_ball = '<span><img src="https://cdn.bulbagarden.net/upload/2/25/Bag_Lure_Ball_Sprite.png" alt="Lure Ball" title="Lure Ball"></span><span style="display:none;">Lure Ball</span>';
		  var moon_ball = '<span><img src="https://cdn.bulbagarden.net/upload/f/f9/Bag_Moon_Ball_Sprite.png" alt="Moon Ball" title="Moon Ball"></span><span style="display:none;">Moon Ball</span>';
		  var dream_ball = '<span><img src="https://cdn.bulbagarden.net/upload/4/4a/Bag_Dream_Ball_Sprite.png" alt="Dream Ball" title="Dream Ball"></span><span style="display:none;">Dream Ball</span>';
		  var beast_ball = '<span><img src="https://cdn.bulbagarden.net/upload/f/f2/Bag_Beast_Ball_Sprite.png" alt="Beast Ball" title="Beast Ball"></span><span style="display:none;">Beast Ball</span>';

      var check = window.checkPoke();
      if(json.feed.entry[i].gsx$safari.$t < check){
        safari_ball = '';
      }
      if(json.feed.entry[i].gsx$sport.$t < check){
        sport_ball = '';
      }
      if(json.feed.entry[i].gsx$fast.$t < check){
        fast_ball = '';
      }
      if(json.feed.entry[i].gsx$friend.$t < check){
        friend_ball = '';
      }
      if(json.feed.entry[i].gsx$heavy.$t < check){
        heavy_ball = '';
      }
      if(json.feed.entry[i].gsx$level.$t < check){
        level_ball = '';
      }
      if(json.feed.entry[i].gsx$love.$t < check){
        love_ball = '';
      }
      if(json.feed.entry[i].gsx$lure.$t < check){
        lure_ball = '';
      }
      if(json.feed.entry[i].gsx$moon.$t < check){
        moon_ball = '';
      }
      if(json.feed.entry[i].gsx$dream.$t < check){
        dream_ball = '';
      }
      if(json.feed.entry[i].gsx$beast.$t < check){
        beast_ball = '';
      }
		  iArray.push(safari_ball+'  '+sport_ball+'  '+fast_ball+'  '+friend_ball+'  '+heavy_ball+'  '+level_ball+'  '+love_ball+'  '+lure_ball+'  '+moon_ball+'  '+dream_ball+'  '+beast_ball);
      iArray.push(json.feed.entry[i].gsx$ability.$t);		  
      iArray.push(json.feed.entry[i].gsx$nature.$t);
		  var eggmoves = "";
		  if(json.feed.entry[i].gsx$eggmoves.$t != ""){
			  eggmoves = '<span style="display:none;">Have Egg Moves</span>';
		  }
		  iArray.push(json.feed.entry[i].gsx$eggmoves.$t + eggmoves);
		  if(check-2) iArray.push(json.feed.entry[i].gsx$note.$t);
      tableArray.push(iArray);
        }
      columns = [
        { title: "No." , "className": "text-center" , "visible": show_pokemon_no},
        { title: "Sprite" , "className": "text-center", "visible": show_pokemon_sprite},
        { title: "Name" , "className": "text-center", "visible": show_pokemon_name , "width": "15%"},
        { title: "Ball" , "className": "text-center", "visible": show_pokemon_ball , "width": "15%"},
        { title: "Ability" , "className": "text-center", "visible": show_pokemon_ability},
        { title: "Nature" , "className": "text-center", "visible": show_pokemon_nature},
        { title: "Egg Moves" , "className": "text-center", "visible": show_pokemon_egg_moves},
        { title: "Note" , "className": "text-center", "visible": show_pokemon_note}
      ];
    if(check-1) columns.pop();
		
    oTable = $('#pkDataTable').DataTable( {
      data: tableArray,
      columns: columns,
      pageLength: page_length,
      lengthChange: page_length_change,
      paging: split_page
    } );
	});	
	

	
	
	$('input:checkbox[name="pkability"]').on( "click", function() {
		if ($('input:checkbox[name="pkability"]').is(':checked')) {
			oTable.column(4).search($('input:checkbox[name="pkability"]').val(), false, false, false).draw(false);
			oTable.page('first').draw(false);
		}else{
			oTable.column(4).search("", false, false, false).draw(false);
			oTable.page('first').draw(false);
		}

	});
	
	$('input:checkbox[name="pkeggmoves"]').on( "click", function() {
		if ($('input:checkbox[name="pkeggmoves"]').is(':checked')) {
			oTable.column(6).search($('input:checkbox[name="pkeggmoves"]').val(), true, false, false).draw(false);
			oTable.page('first').draw(false);
		}else{
			oTable.column(6).search("", true, false, false).draw(false);
			oTable.page('first').draw(false);
		}

	});
		
  $('#pkBall').multiselect({
    includeSelectAllOption: true,
    maxHeight: 300,
    buttonWidth: 210,
    numberDisplayed: 0,
    onChange: function(element, checked) {
      var pkBall = $('#pkBall option:selected');
      var Ballselected = $(pkBall).map(function(i, el) {
        return $(el).val();
      }).get();
      oTable.column(3).search(Ballselected.join('|'), true, false, false).draw();		
      oTable.page('first').draw(false);
    },
    onSelectAll: function() {
      var pkAllBalls = "Safari Ball|Sport Ball|Fast Ball|Friend Ball|Heavy Ball|Level Ball|Love Ball|Lure Ball|Moon Ball|Dream Ball|Beast Ball";
      oTable.column(3).search(pkAllBalls, true, false, false).draw();		
      oTable.page('first').draw(false);
    }
  });

  $('#invBall').multiselect({
    includeSelectAllOption: true,
    maxHeight: 300,
    buttonWidth: 210,
    numberDisplayed: 0,
    onChange: function(element, checked) {
      var invBall = $('#invBall option:selected');
      var Ballselected = $(invBall).map(function(i, el) {
        return $(el).val();
      }).get();
      // var pkAllBalls = '((?!Dream Ball).)';
      var pkAllBalls = '';
      pkAllBalls = '^((?!('+Ballselected.join('|')+')).)*$';
      oTable.column(3).search(pkAllBalls, true, false, false).draw();		
      oTable.page('first').draw(false);
    },
    onSelectAll: function() {
      var pkAllBalls = "Safari Ball|Sport Ball|Fast Ball|Friend Ball|Heavy Ball|Level Ball|Love Ball|Lure Ball|Moon Ball|Dream Ball|Beast Ball";
      // var pkAllBalls = '((?!Dream Ball).)*';
      oTable.column(3).search(pkAllBalls, true, false, false).draw();		
      oTable.page('first').draw(false);
    }
  });
  
  $('#pkGen').multiselect({

    includeSelectAllOption: true,
    maxHeight: 300,
    buttonWidth: 210,
    numberDisplayed: 0,
    onChange: function(element, checked) {
      var pkGen = $('#pkGen option:selected');
      var Genselected = $(pkGen).map(function(i, el) {
        return $(el).val();
      }).get();
      oTable.column(2).search(Genselected.join('|'), true, false, false).draw();		
      oTable.page('first').draw(false);
    },
    onSelectAll: function() {
      var pkAllGens = "gen1|gen2|gen3|gen4|gen5|gen6|gen7|gen8";
      oTable.column(2).search(pkAllGens, true, false, false).draw();		
      oTable.page('first').draw(false);
    }
  });

  $('#pkNature').multiselect({

    includeSelectAllOption: true,
    maxHeight: 300,
    buttonWidth: 210,
    numberDisplayed: 0,
    onChange: function(element, checked) {
      var pkNature = $('#pkNature option:selected');
      var Natureselected = $(pkNature).map(function(i, el) {
        return $(el).val();
      }).get();
      oTable.column(5).search(Natureselected.join('|'), true, false, false).draw();	
      oTable.page('first').draw(false);

    },
    onSelectAll: function() {
      var pkAllGens = "Adamant|Bashful|Bold|Brave|Calm|Careful|Docile|Gentle|Hardy|Hasty|Impish|Jolly|Lax|Lonely|Mild|Modest|Naive|Naughty|Quiet|Quirky|Rash|Relaxed|Sassy|Serious|Timid";
      oTable.column(5).search(pkAllGens, true, false, false).draw();		
      oTable.page('first').draw(false);
    }	
  });   


});
