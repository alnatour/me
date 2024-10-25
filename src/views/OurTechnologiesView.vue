<template>
    <div>
        <Breadcrumb src="../src/assets/images/background/about-bg.jpg">
            <template v-slot:heading>Unsere Technologien</template>
            <template v-slot:image>../src/assets/images/background/about-bg.jpg</template>
        </Breadcrumb>

        <!-- Programmierung -->
        <section class="section" data-aos="fade-up" data-aos-duration="1500">
            <div class="container">
                <div class="row">
                    <h2 class="section-title section-title-border-half">Programmierung</h2>
                    <p>
                        Verkaufsfertige Websites oder Online-Shops werden mit verschiedenen Technologien wie PHP, HTML,
                        CSS,
                        JavaScript und modernen Frameworks und Systemen wie TYPO3, WordPress und Magento erstellt.
                        Webentwicklung
                        oder Webengineering bezieht sich auf die Entwicklung von Webanwendungen wie Geschäftsportalen,
                        E-Commerce-Sites, Blogs oder anderer kundenspezifischer Software über das Internet.
                    </p>

                    <h5>Unsere Technologien:</h5>
                    <p>
                        Webtechnologien ändern sich ständig. Mit Fokus auf Open-Source-Entwicklung konzentrieren sich
                        Entwickler
                        hauptsächlich auf aktuelle Versionen von HTML/CSS, PHP/MySQL und JavaScript. Jede Sprache bietet
                        weit
                        verbreitete Frameworks und Codebasen und ist daher praxiserprobt. Auf diesen Bausteinen bauen
                        wir auf, um
                        stabile und wartbare Software zu bauen. Wir verwenden hauptsächlich Laravel-, Symfony- oder
                        Zend-Frameworks
                        auf der PHP-Seite und React in der JavaScript-Welt.
                    </p>
                    <p>
                        Hervorragende Webanwendungen mit <strong>Laravel</strong>, für Sie entwickelt für eine
                        effiziente und
                        zuverlässige
                        Webentwicklung. Laravel macht die iterative Programmierung einfach.
                    </p>
                    <p>
                        Moderne Einzelseiten-Webanwendungen mit <strong>Vue.js</strong> Mit dem leichten und flexiblen
                        Vue.js-JavaScript-Framework
                        können Sie moderne Einzelseiten-Webanwendungen und dynamische Website-Komponenten bereitstellen.
                    </p>
                    <p>
                        Flexible Webseiten mit <strong>WordPress</strong> ist das weltweit meisteingesetzte
                        Content-Management-System. Wir bieten für WordPress Lösungen, die auch höchsten Ansprüchen
                        gerecht werden. Mehr zu WordPress
                    </p>
                </div>
            </div>
        </section>
        <!-- /Programmierung -->

    </div>
</template>

<script>

export default {
    props: ['src'],

    components: {
    },
  
    setup() {
        return {};
    },
};
</script>

<style>
</style>
