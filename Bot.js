<?xml version="1.0" encoding="UTF-8"?>
<project xmlns="http://maven.apache.org/POM/4.0.0"
         xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">
    <modelVersion>4.0.0</modelVersion>

    <groupId>com.mrpowergamerbr.tutorialbot</groupId>
    <artifactId>TutorialBot</artifactId>
    <version>1.0-SNAPSHOT</version>

	<properties>
		<kotlin.version>1.1.4</kotlin.version>
	</properties>

	<repositories>
        <repository>
            <id>jcenter</id>
            <name>jcenter-bintray</name>
            <url>http://jcenter.bintray.com</url>
        </repository>
        <repository>
            <id>central</id>
            <name>bintray</name>
            <url>http://jcenter.bintray.com</url>
        </repository>
	</repositories>
	
    <dependencies>
		<dependency>
			<groupId>net.dv8tion</groupId>
			<artifactId>JDA</artifactId>
			<version>3.2.0_255</version>
		</dependency>
    </dependencies>

    <build>
        <sourceDirectory>${project.basedir}/src/main/java</sourceDirectory>
        <plugins>
            <plugin>
                <artifactId>kotlin-maven-plugin</artifactId>
                <groupId>org.jetbrains.kotlin</groupId>
                <version>${kotlin.version}</version>

                <executions>
                    <execution>
                        <id>compile</id>
                        <goals> <goal>compile</goal> </goals>
                    </execution>

                    <execution>
                        <id>test-compile</id>
                        <goals> <goal>test-compile</goal> </goals>
                    </execution>
                </executions>
            </plugin>
            <plugin>
                <groupId>org.apache.maven.plugins</groupId>
                <artifactId>maven-assembly-plugin</artifactId>
                <version>2.6</version>
                <executions>
                    <execution>
                        <id>make-assembly</id>
                        <phase>package</phase>
                        <goals> <goal>single</goal> </goals>
                        <configuration>
                            <archive>
                                <manifest>
                                    <mainClass>com.kingdown.brenda.TutorialBotLauncher</mainClass>
                                </manifest>
                            </archive>
                            <descriptorRefs>
                                <descriptorRef>jar-with-dependencies</descriptorRef>
                            </descriptorRefs>
                        </configuration>
                    </execution>
                </executions>
            </plugin>
        </plugins>
    </build>
</project>