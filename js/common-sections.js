
$(document).ready(function(){
	var nav = '<div class="container"> \
		<div class="title pull-left"> \
			<b>Java 8 Programmer II Study Guide</b> \
		</div> \
		<div class="menu desktop pull-right"> \
		  <a class="chapters dropdown-desktop" href="#"><i class="icon-book"></i><span>Chapters</span></a> \
		  <ul class="dropdown-menu"> \
			<li class="column-menu"> \
			  <ul> \
				<li><a tabindex="-1" href="ch01.html">1. Encapsulation and Immutable Classes</a></li> \
				<li><a tabindex="-1" href="ch02.html">2. Inheritance and Polymorphism</a></li> \
				<li><a tabindex="-1" href="ch03.html">3. Inner Classes</a></li> \
				<li><a tabindex="-1" href="ch04.html">4. Interfaces</a></li> \
				<li><a tabindex="-1" href="ch05.html">5. Enumerations</a></li> \
				<li><a tabindex="-1" href="ch06.html">6. Generics</a></li> \
				<li><a tabindex="-1" href="ch07.html">7. Collections</a></li> \
				<li><a tabindex="-1" href="ch08.html">8. Functional Interfaces</a></li> \
				<li><a tabindex="-1" href="ch09.html">9. Lambda Expressions</a></li> \
				<li><a tabindex="-1" href="ch10.html">10. Java Built-In Lambda Interfaces</a></li> \
				<li><a tabindex="-1" href="ch11.html">11. Method References</a></li> \
				<li><a tabindex="-1" href="ch12.html">12. Streams</a></li> \
				<li><a tabindex="-1" href="ch13.html">13. Iterating and Filtering Collections</a></li> \
				<li><a tabindex="-1" href="ch14.html">14. Optional Class</a></li> \
				<li><a tabindex="-1" href="ch15.html">15. Data Search</a></li> \
				<li><a tabindex="-1" href="ch16.html">16. Stream Operations on Collections</a></li> \
			  </ul> \
			</li> \
			<li class="column-menu"> \
			  <ul> \
				<li><a tabindex="-1" href="ch17.html">17. Peeking, Mapping, Reducing and Collecting</a></li> \
				<li><a tabindex="-1" href="ch18.html">18. Parallel Streams</a></li> \
				<li><a tabindex="-1" href="ch19.html">19. Exceptions</a></li> \
				<li><a tabindex="-1" href="ch20.html">20. Assertions</a></li> \
				<li><a tabindex="-1" href="ch21.html">21. Core Date/Time Classes</a></li> \
				<li><a tabindex="-1" href="ch22.html">22. Time Zones and Daylight Savings</a></li> \
				<li><a tabindex="-1" href="ch23.html">23. Java I/O Fundamentals</a></li> \
				<li><a tabindex="-1" href="ch24.html">24. NIO.2</a></li> \
				<li><a tabindex="-1" href="ch25.html">25. Files and Streams</a></li> \
				<li><a tabindex="-1" href="ch26.html">26. Thread Basics</a></li> \
				<li><a tabindex="-1" href="ch27.html">27. Concurrency</a></li> \
				<li><a tabindex="-1" href="ch28.html">28. Fork/Join Framework</a></li> \
				<li><a tabindex="-1" href="ch29.html">29. JDBC API</a></li> \
				<li><a tabindex="-1" href="ch30.html">30. Localization</a></li> \
				<li><a tabindex="-1" href="upgrade.html">Upgrade from Java 6/7</a></li> \
				<li><a tabindex="-1" href="ch31.html">A1. From Java 6 to Java 8</a></li> \
			  </ul> \
			</li> \
		  </ul> \
		</div> \
	</div> \
	<div class="menu mobile pull-right"> \
		<a class="chapters dropdown-mobile" href="#"><i class="icon-book"></i></a> \
		<ul class="dropdown-menu"> \
		  <li class="column-menu"> \
			<ul> \
			  <li><a tabindex="-1" href="ch01.html">1. Encapsulation and Immutable Classes</a></li> \
				<li><a tabindex="-1" href="ch02.html">2. Inheritance and Polymorphism</a></li> \
				<li><a tabindex="-1" href="ch03.html">3. Inner Classes</a></li> \
				<li><a tabindex="-1" href="ch04.html">4. Interfaces</a></li> \
				<li><a tabindex="-1" href="ch05.html">5. Enumerations</a></li> \
				<li><a tabindex="-1" href="ch06.html">6. Generics</a></li> \
				<li><a tabindex="-1" href="ch07.html">7. Collections</a></li> \
				<li><a tabindex="-1" href="ch08.html">8. Functional Interfaces</a></li> \
				<li><a tabindex="-1" href="ch09.html">9. Lambda Expressions</a></li> \
				<li><a tabindex="-1" href="ch10.html">10. Java Built-In Lambda Interfaces</a></li> \
				<li><a tabindex="-1" href="ch11.html">11. Method References</a></li> \
				<li><a tabindex="-1" href="ch12.html">12. Streams</a></li> \
				<li><a tabindex="-1" href="ch13.html">13. Iterating and Filtering Collections</a></li> \
				<li><a tabindex="-1" href="ch14.html">14. Optional Class</a></li> \
				<li><a tabindex="-1" href="ch15.html">15. Data Search</a></li> \
				<li><a tabindex="-1" href="ch16.html">16. Stream Operations on Collections</a></li> \
			</ul> \
		  </li> \
		  <li class="column-menu"> \
			<ul> \
				<li><a tabindex="-1" href="ch17.html">17. Peeking, Mapping, Reducing and Collecting</a></li> \
				<li><a tabindex="-1" href="ch18.html">18. Parallel Streams</a></li> \
				<li><a tabindex="-1" href="ch19.html">19. Exceptions</a></li> \
				<li><a tabindex="-1" href="ch20.html">20. Assertions</a></li> \
				<li><a tabindex="-1" href="ch21.html">21. Core Date/Time Classes</a></li> \
				<li><a tabindex="-1" href="ch22.html">22. Time Zones and Daylight Savings</a></li> \
				<li><a tabindex="-1" href="ch23.html">23. Java I/O Fundamentals</a></li> \
				<li><a tabindex="-1" href="ch24.html">24. NIO.2</a></li> \
				<li><a tabindex="-1" href="ch25.html">25. Files and Streams</a></li> \
				<li><a tabindex="-1" href="ch26.html">26. Thread Basics</a></li> \
				<li><a tabindex="-1" href="ch27.html">27. Concurrency</a></li> \
				<li><a tabindex="-1" href="ch28.html">28. Fork/Join Framework</a></li> \
				<li><a tabindex="-1" href="ch29.html">29. JDBC API</a></li> \
				<li><a tabindex="-1" href="ch30.html">30. Localization</a></li> \
				<li><a tabindex="-1" href="upgrade.html">Upgrade from Java 6/7</a></li> \
				<li><a tabindex="-1" href="ch31.html">A1. From Java 6 to Java 8</a></li> \
			</ul> \
		  </li> \
		</ul> \
	  </div>';
	  
	var buy_info = '<p><a href="http://www.amazon.com/dp/B01DXSGHX4" target="_blank">Buying the print/kindle version from Amazon</a></p> \
		<p><a href="https://leanpub.com/java8-programmer-ii-study-guide/" target="_blank">Buying the PDF/EPUB/MOBI version from Leanpub</a></p>';
	  
	var problem_info = '<p>Do you have a problem or something to say?</p> \
		<p><a href="https://github.com/eh3rrera/ocpj8-book/issues" target="_blank">Report an issue with the book</a></p> \
		<p><a href="http://eherrera.net/" target="_blank">Contact me</a></p>';
	  
	var book_info = '<p>Do you like what you read? Would you consider?</p> ' +
		buy_info +
		'<br/> ' +
		problem_info;
		
	var footer = '<div class="container"> \
		<a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="Creative Commons License" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a><br />This <span xmlns:dct="http://purl.org/dc/terms/" href="http://purl.org/dc/dcmitype/Text" rel="dct:type">work</span> is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License</a>. \
	  </div>';
	
	$('div.nav').append(nav);
	$('div.book-info').append(book_info);
	$('div.buy-info').append(buy_info);
	$('footer').append(footer);

	$("a.dropdown-desktop").click(function(event){
		showMenu($("div.menu.desktop"), event);
	})
	$("a.dropdown-mobile").click(function(event){
		showMenu($("div.menu.mobile"), event);
	})

	function showMenu(el, event) {
		event.preventDefault();
		el.toggleClass("open");
	}
});
