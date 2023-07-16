<script setup>
useHead({
  title: 'Experience',
})
</script>

<template>
  <article class="resume active" data-page="resume">
    <header>
      <h2 class="h2 article-title">
        {{ $t('pageTitles.experience') }}
      </h2>
    </header>

    <section class="timeline">
      <ol class="timeline-list">
        <li class="timeline-item">
          <h4 class="h4 timeline-item-title">
            Cashbee Lending Services, Metro Manila
          </h4>
          <span>Jan 2023 - July 2023</span>
          <p class="timeline-item-desc">
            Metro Manila
          </p>
          <p class="timeline-text">
            Frontend Developer
          </p>

          <p style="font-size: 12px; color: white">
            In this role, the primary tasks involve transforming approved UI/UX designs into frontend
            code, as well as creating backend REST APIs. The responsibility also includes translating
            business requirements into technical requirements and implementing them through
            coding. Adhering to coding principles such as OOP (Object-Oriented Programming) and
            SOLID, as well as utilizing proper coding styles like ES6 and PSR-2, is essential. To ensure
            the system's quality, testing is conducted through the practice of TDD (Test Driven
            Development). Additionally, designing a normalized database schema capable of handling
            business data is part of the responsibilities. The process involves pushing and pulling code
            from GIT, following proper GIT flow guidelines. Deployment of systems is carried out
            within a Linux environment, and tasks are completed within the estimated timeline.
          </p>
        </li>

        <li class="timeline-item">
          <h4 class="h4 timeline-item-title">
            Bizmates Philippines Inc.
          </h4>
          <span>Jan 2023 - July 2023</span>
          <p class="timeline-item-desc">
            Muntinlupa City, Metro Manila
          </p>
          <p class="timeline-text">
            Software Developer
          </p>

          <p style="font-size: 12px; color: white">
            In the role of a frontend developer, the primary focus is on developing new features for a
            project. This entails applying ES6 standards while coding and reviewing code from other
            developers. Following the Agile Methodology is a crucial aspect of the development
            process. To stay updated and aligned with the team, daily scrum meetings are attended to
            provide progress updates. Additionally, participating in code demo features for clients is
            an important responsibility. The task also involves transforming UI/UX designs into
            frontend web code and ensuring that the implementation aligns with pixel-perfect
            standards to meet client expectations. Addressing bug fixes for existing features is
            another essential aspect of the role
          </p>
        </li>

        <li class="timeline-item">
          <h4 class="h4 timeline-item-title">
            AllValue Holdings Corp.
          </h4>
          <span>Jan 2023 - July 2023</span>
          <p class="timeline-item-desc">
            Muntinlupa City, Metro Manila
          </p>
          <p class="timeline-text">
            Desktop Support Engineer (Intern)
          </p>

          <p style="font-size: 12px; color: white">
            In this role, the focus is on providing technical support to employees and addressing
            various network and hardware issues. This includes fixing necessary network problems,
            setting up full desktop computers, and resolving POS (Point of Sale) problems. Installing
            antivirus software and troubleshooting printer issues are also part of the responsibilities.
            Additionally, handling employee technical requests and providing assistance in resolving
            their technology-related concerns is a key aspect of the role.

          </p>
        </li>
      </ol>
    </section>

    <!-- <section class="skill">
      <ul class="skills-list content-card">
        <li class="skills-item">
          <div class="title-wrapper">
            <h5 class="h5">
              Your Skill
            </h5>
            <data value="90">90%</data>
          </div>

          <div class="skill-progress-bg">
            <div class="skill-progress-fill" style="width: 90%;" />
          </div>
        </li>

      </ul>
    </section> -->
  </article>
</template>
