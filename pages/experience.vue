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
          <p>
          <div class="flex-container">
            <div>
              <span class="chip primary">
                HTML5
              </span>
            </div>
            <div>
              <span class="chip primary">
                CSS
              </span>
            </div>
            <div>
              <span class="chip primary">
                Javascript
              </span>
            </div>
            <div>
              <span class="chip primary">
               Vue
              </span>
            </div>
            <div>
              <span class="chip primary">
               Quasar
              </span>
            </div>
            <div>
              <span class="chip primary">
              Cordova
              </span>
            </div>
            <div>
              <span class="chip primary">
               Asana
              </span>
            </div>
            <div>
              <span class="chip primary">
                Adobe XD
              </span>
            </div>
            <div>
              <span class="chip primary">
                Github
              </span>
            </div>
            <div>
              <span class="chip primary">
               Slack
              </span>
            </div>
          </div>
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
          <p>
          <div class="flex-container">
            <div>
              <span class="chip primary">
                HTML5
              </span>
            </div>
            <div>
              <span class="chip primary">
                CSS
              </span>
            </div>
            <div>
              <span class="chip primary">
                Javascript
              </span>
            </div>
            <div>
              <span class="chip primary">
               Vue
              </span>
            </div>
            <div>
              <span class="chip primary">
                Vuetify
              </span>
            </div>
            <div>
              <span class="chip primary">
              Nuxt
              </span>
            </div>
            <div>
              <span class="chip primary">
                Laravel
              </span>
            </div>
            <div>
              <span class="chip primary">
                Jira
              </span>
            </div>
            <div>
              <span class="chip primary">
                Adobe XD
              </span>
            </div>
            <div>
              <span class="chip primary">
                Github
              </span>
            </div>
            <div>
              <span class="chip primary">
               Slack
              </span>
            </div>
          </div>
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
          <p>
          <div class="flex-container">
            <div>
              <span class="chip primary">
                Desktop Troubleshooting
              </span>
            </div>
            <div>
              <span class="chip primary">
                Active Directory
              </span>
            </div>
            <div>
              <span class="chip primary">
                DNS Settings
              </span>
            </div>
            <div>
              <span class="chip primary">
                Antivirus Software
              </span>
            </div>
            <div>
              <span class="chip primary">
                Network Troubleshooting
              </span>
            </div>
            <div>
              <span class="chip primary">
                Hardware Setup
              </span>
            </div>
          </div>
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

<style scoped>
.flex-container {
  display: flex;
  padding-top: 0.7em;
  flex-wrap: wrap;
}

.chip {
  padding: 6px 8px;
  border-radius: 10px;
  font-weight: 600;
  font-size: 10px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, .25);
  margin: 0 10px;
  opacity: 0.9;
  margin-right: 1em;
  margin-bottom: 1em;
}

.chip.primary {
  background: #202c3b;
  color: whitesmoke;
}
</style>
