import { Brain, Zap, Target } from 'lucide-react';

function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center space-y-4 py-12 text-center">
      {/* Seção Sobre */}
      <section className="w-full max-w-6xl px-6 py-16" aria-labelledby="about-title">
        {/* Título e Subtítulo */}
        <div className="mb-12 space-y-4 text-center">
          <h2
            id="about-title"
            className="text-foreground text-4xl font-bold tracking-tight md:text-5xl"
          >
            Por que escolher o LearnEG?
          </h2>
          <p className="text-muted-foreground mx-auto max-w-2xl text-lg">
            Metodologia personalizada com inteligência artificial para seu aprendizado
          </p>
        </div>

        {/* Tópicos Visuais com Ícones */}
        <div className="mb-12 grid gap-8 md:grid-cols-3">
          {/* Tópico 1: Análise Inteligente */}
          <div
            className="bg-card group flex flex-col items-center gap-4 rounded-xl border p-8 shadow-sm transition-all duration-200 hover:shadow-md"
            role="article"
            aria-labelledby="topic-analysis"
          >
            <div className="size-16 bg-primary/10 group-hover:bg-primary/20 flex items-center justify-center rounded-full transition-colors duration-200">
              <Brain className="size-8 text-primary" aria-hidden="true" />
            </div>
            <h3 id="topic-analysis" className="text-foreground text-xl font-semibold">
              Análise Inteligente
            </h3>
            <p className="text-muted-foreground text-center text-sm leading-relaxed">
              Nossa IA analisa seu progresso em tempo real
            </p>
          </div>

          {/* Tópico 2: Adaptação Automática */}
          <div
            className="bg-card group flex flex-col items-center gap-4 rounded-xl border p-8 shadow-sm transition-all duration-200 hover:shadow-md"
            role="article"
            aria-labelledby="topic-adaptation"
          >
            <div className="size-16 bg-primary/10 group-hover:bg-primary/20 flex items-center justify-center rounded-full transition-colors duration-200">
              <Zap className="size-8 text-primary" aria-hidden="true" />
            </div>
            <h3 id="topic-adaptation" className="text-foreground text-xl font-semibold">
              Adaptação Automática
            </h3>
            <p className="text-muted-foreground text-center text-sm leading-relaxed">
              Conteúdo e exercícios se ajustam às suas necessidades
            </p>
          </div>

          {/* Tópico 3: Ritmo Personalizado */}
          <div
            className="bg-card group flex flex-col items-center gap-4 rounded-xl border p-8 shadow-sm transition-all duration-200 hover:shadow-md"
            role="article"
            aria-labelledby="topic-pace"
          >
            <div className="size-16 bg-primary/10 group-hover:bg-primary/20 flex items-center justify-center rounded-full transition-colors duration-200">
              <Target className="size-8 text-primary" aria-hidden="true" />
            </div>
            <h3 id="topic-pace" className="text-foreground text-xl font-semibold">
              Ritmo Personalizado
            </h3>
            <p className="text-muted-foreground text-center text-sm leading-relaxed">
              Velocidade de aprendizado única para maximizar seu desenvolvimento
            </p>
          </div>
        </div>

        {/* Texto Explicativo Detalhado */}
        <div className="bg-muted/50 mx-auto max-w-3xl space-y-4 rounded-xl border p-8 text-left">
          <p className="text-foreground leading-relaxed">
            Nossa inteligência artificial analisa seu progresso em tempo real e adapta cada aula ao
            seu ritmo único de aprendizado. Enquanto você estuda, nossa IA identifica suas
            facilidades e dificuldades, ajustando automaticamente o conteúdo, exercícios e
            velocidade para maximizar seu desenvolvimento.
          </p>
        </div>
      </section>
    </div>
  );
}

export { HomePage };
