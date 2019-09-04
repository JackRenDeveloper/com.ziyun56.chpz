# com.ziyun56.chpz
分布式项目
前期先实现后台登录和菜单页面


报错：
java.io.FileNotFoundException: D:\repo\org\apache\derby\derby\10.14.2.0\derbyLocale_ja_JP.jar (系统找不到指定的文件。)
	at java.util.zip.ZipFile.open(Native Method) ~[?:1.8.0_172]
	at java.util.zip.ZipFile.<init>(ZipFile.java:225) ~[?:1.8.0_172]
	at java.util.zip.ZipFile.<init>(ZipFile.java:155) ~[?:1.8.0_172]
	at java.util.jar.JarFile.<init>(JarFile.java:166) ~[?:1.8.0_172]
	at java.util.jar.JarFile.<init>(JarFile.java:130) ~[?:1.8.0_172]
	at org.apache.tomcat.util.compat.JreCompat.jarFileNewInstance(JreCompat.java:164) ~[tomcat-embed-core-9.0.17.jar:9.0.17]
	at org.apache.tomcat.util.scan.JarFileUrlJar.<init>(JarFileUrlJar.java:65) ~[tomcat-embed-core-9.0.17.jar:9.0.17]
	at org.apache.tomcat.util.scan.JarFactory.newInstance(JarFactory.java:49) ~[tomcat-embed-core-9.0.17.jar:9.0.17]
	at org.apache.tomcat.util.scan.StandardJarScanner.process(StandardJarScanner.java:374) ~[tomcat-embed-core-9.0.17.jar:9.0.17]
	at org.apache.tomcat.util.scan.StandardJarScanner.processURLs(StandardJarScanner.java:309) [tomcat-embed-core-9.0.17.jar:9.0.17]
	at org.apache.tomcat.util.scan.StandardJarScanner.doScanClassPath(StandardJarScanner.java:266) [tomcat-embed-core-9.0.17.jar:9.0.17]
	at org.apache.tomcat.util.scan.StandardJarScanner.scan(StandardJarScanner.java:229) [tomcat-embed-core-9.0.17.jar:9.0.17]
	at org.apache.jasper.servlet.TldScanner.scanJars(TldScanner.java:262) [tomcat-embed-jasper-8.5.40.jar:8.5.40]
	at org.apache.jasper.servlet.TldScanner.scan(TldScanner.java:104) [tomcat-embed-jasper-8.5.40.jar:8.5.40]

由于springboot项目自带tomcat插件，冲突导致
删掉：
<dependency>
			<groupId>org.springframework.boot</groupId>
			<artifactId>spring-boot-starter-tomcat</artifactId>
			<scope>provided</scope>
		</dependency>
		<dependency>
			<groupId>org.apache.tomcat.embed</groupId>
			<artifactId>tomcat-embed-jasper</artifactId>
			<scope>provided</scope>
		</dependency>