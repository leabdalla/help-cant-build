# help-cant-build

I'm trying to build this project but having issues with Google Maps.

Steps to reproduce:

    export NODE_OPTIONS=--openssl-legacy-provider
    npm install

    ionic cordova platform add android@13
    ionic cordova build android

It will result in symbol erros like:

    symbol:   method getGoogleMap()
    location: variable pluginMap of type PluginMap
      /Users/myuser/dev/help-cant-build/platforms/android/app/src/main/java/plugin/google/maps/UpdateCameraAction.java:41: error: cannot find symbol
              result.cameraPadding = DEFAULT_CAMERA_PADDING;

I need it building for Browser, Android and iOS platforms.

Some information about my system

    node -v
      v18.16.0

    /usr/libexec/java_home -V
      Matching Java Virtual Machines (5):
      21.0.3 (arm64) "Eclipse Adoptium" - "OpenJDK 21.0.3" /Library/Java/JavaVirtualMachines/temurin-21.jdk/Contents/Home
      17.0.10 (arm64) "Oracle Corporation" - "Java SE 17.0.10" /Library/Java/JavaVirtualMachines/jdk-17.jdk/Contents/Home
      15.0.2 (x86_64) "Oracle Corporation" - "OpenJDK 15.0.2" /Library/Java/JavaVirtualMachines/jdk-15.0.2.jdk/Contents/Home
      11.0.23 (arm64) "Eclipse Adoptium" - "OpenJDK 11.0.23" /Library/Java/JavaVirtualMachines/temurin-11.jdk/Contents/Home
      1.8.0_302 (x86_64) "Eclipse Temurin" - "Eclipse Temurin 8" /Library/Java/JavaVirtualMachines/temurin-8.jdk/Contents/Home
      /Library/Java/JavaVirtualMachines/temurin-21.jdk/Contents/Home

    java -version
      openjdk version "22.0.1" 2024-04-16
      OpenJDK Runtime Environment Homebrew (build 22.0.1)
      OpenJDK 64-Bit Server VM Homebrew (build 22.0.1, mixed mode, sharing)
    
    gradle -v
      Gradle 8.8
      ------------------------------------------------------------
      Build time:   2024-05-31 21:46:56 UTC
      Revision:     4bd1b3d3fc3f31db5a26eecb416a165b8cc36082
      Kotlin:       1.9.22
      Groovy:       3.0.21
      Ant:          Apache Ant(TM) version 1.10.13 compiled on January 4 2023
      JVM:          22.0.1 (Homebrew 22.0.1)
      OS:           Mac OS X 14.5 aarch64
