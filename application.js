$(document).ready(function(){
	console.log('Yo, this thing on?');

	$('#notTheButton').hide();

	$('.profile').parent().find('p').slideToggle();
		console.log('minimized profile');
	$('.expertise').parent().find('div').slideToggle();
		console.log('minimized expertise');
	$('.experience').parent().find('div').slideToggle();
		console.log('minimized experience');
	$('.education').parent().find('ul').slideToggle();
		console.log('minimized education');
	$('.programming').parent().find('ul').slideToggle();
		console.log('minimized programming');

	$('.viewRez').on('click', function(){
		$(this).remove();
		$('#notTheButton').fadeIn(2000);
	});


	$('.contact-block').on('click',function(){
		alert('Yes, you want to hire Doug!')
		console.log('found contact-block');
	});

	$('.contact-block').on('mouseenter',function(){
		$(this).find('h1').addClass('bigger')
		$(this).find('p').addClass('bigger')
		console.log('found contact-block');
	});

	$('.contact-block').on('mouseleave',function(){

		$(this).find('h1').removeClass('bigger')
		$(this).find('p').removeClass('bigger')
		console.log('found contact-block');
	});

	$('.profile').on('click',function(){
		$(this).parent().find('p').slideToggle();
		console.log('found profile');
	});

	$('.expertise').on('click',function(){
		$(this).parent().find('div').slideToggle();
		console.log('found expertise');
	});

	$('.experience').on('click',function(){
		$(this).parent().find('div').slideToggle();
		console.log('found experience');
	});

	$('.education').on('click',function(){
		$(this).parent().find('ul').slideToggle();
		console.log('found education');
	});

	$('.programming').on('click',function(){
		$(this).parent().find('ul').slideToggle();
		console.log('found programming');
	});

	$('#profile').on('mouseenter',function(){
		$(this).addClass('highlighted');
		console.log('found profile paragraph');
	});

	$('#profile').on('mouseleave',function(){
		$(this).removeClass('highlighted');
		console.log('found profile paragraph');
	});

	$('.twocolumns-wrapper').on('mouseenter',function(){
		$(this).parent().find('ul').addClass('highlighted');
		console.log('found twocolumns-wrapper');
	});

	$('.twocolumns-wrapper').on('mouseleave',function(){
		$(this).parent().find('ul').removeClass('highlighted');
		console.log('found twocolumns-wrapper');
	});
	$('.experience-block').on('mouseenter',function(){
		$(this).parent().find('ul').addClass('highlighted');
		$(this).parent().find('h3').addClass('highlighted');
		$(this).parent().find('h4').addClass('highlighted');
		console.log('found experience-block');
	});

	$('.experience-block').on('mouseleave',function(){
		$(this).parent().find('ul').removeClass('highlighted');
		$(this).parent().find('h3').removeClass('highlighted');
		$(this).parent().find('h4').removeClass('highlighted');
		console.log('found experience-block');
	});

	$('.education-block').on('mouseenter',function(){
		$(this).parent().find('ul').addClass('highlighted');
		console.log('found education');
	});

	$('.education-block').on('mouseleave',function(){
		$(this).parent().find('ul').removeClass('highlighted');
		console.log('found education');
	});

	$('.programming-block').on('mouseenter',function(){
		$(this).parent().find('ul').addClass('highlighted');
		console.log('found programming');
	});

	$('.programming-block').on('mouseleave',function(){
		$(this).parent().find('ul').removeClass('highlighted');
		console.log('found programming');
	});




});