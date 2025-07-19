import { useState } from "react";

import Button from "@/components/Button/Button";
import Input from "@/components/Input/Input";
import Link from "@/components/Link/Link";
import TextBlock from "@/components/TextBlock/TextBlock";

import {
  FiStar,
  FiDownload,
  FiArrowRight,
  FiHeart,
  FiUser,
  FiMail,
  FiSettings,
  FiHome,
  FiFileText,
  FiLink,
  FiCalendar,
} from "react-icons/fi";

const App = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [emailError, setEmailError] = useState("");
  const [loading, setLoading] = useState(false);

  // Novos estados para inputs de validação:
  const [validEmail, setValidEmail] = useState("usuario@exemplo.com");
  const [invalidEmail, setInvalidEmail] = useState("email-invalido");

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmail(value);

    if (value && !validateEmail(value)) {
      setEmailError("Por favor, insira um email válido");
    } else {
      setEmailError("");
    }
  };

  const handleSubmit = async () => {
    if (!validateEmail(email)) {
      setEmailError("Email obrigatório e válido");
      return;
    }

    setLoading(true);

    // Simular envio
    setTimeout(() => {
      setLoading(false);
      alert("Formulário enviado com sucesso!");
      setEmail("");
      setMessage("");
      setEmailError("");
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-light via-quaternary/30 to-tertiary/20">
      {/* Decorative background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-secondary/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-tertiary/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10">
        {/* Navigation */}
        <nav className="glass sticky top-0 z-50 border-b border-outline/10">
          <div className="max-w-7xl mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-8">
                <h1 className="text-2xl font-bold text-gradient">ALFABIT</h1>
                <div className="hidden md:flex space-x-6">
                  <Link href="#components" variant="subtle">
                    Componentes
                  </Link>
                  <Link href="#examples" variant="subtle">
                    Exemplos
                  </Link>
                  <Link href="#docs" variant="subtle">
                    Documentação
                  </Link>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <Link href="/storybook" external>
                  <Button variant="outline" size="sm">
                    Storybook
                  </Button>
                </Link>
                <Button size="sm">Começar</Button>
              </div>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="py-20 px-6">
          <div className="max-w-6xl mx-auto text-center animate-fadeIn">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-primary mb-6">
              Design System
              <span className="text-gradient block mt-2">Moderno & Modular</span>
            </h1>
            <p className="text-xl text-gray-secondary mb-8 max-w-3xl mx-auto leading-relaxed">
              Construído com Next.js, Storybook e TailwindCSS para criar interfaces
              consistentes, escaláveis e de alta qualidade.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" icon={<FiArrowRight />} iconPosition="right">
                Explorar Componentes
              </Button>
              <Link href="#demo" variant="button" size="lg">
                Ver Demonstração
              </Link>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section id="components" className="py-16 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-primary mb-4">
                Componentes Poderosos
              </h2>
              <p className="text-lg text-gray-secondary max-w-2xl mx-auto">
                Cada componente foi cuidadosamente projetado com foco em usabilidade,
                acessibilidade e experiência do usuário.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <TextBlock
                title="Botões Inteligentes"
                textBlock="Múltiplas variações, tamanhos e estados. Suporte a ícones, loading e animações fluidas para uma experiência premium."
                icon={<FiStar />}
                variant="elevated"
                size="sm"
                animated
                actionButton={{
                  text: "Ver Exemplos",
                  onClick: () =>
                    window.scrollTo({
                      top: document.getElementById("buttons")?.offsetTop ?? 0,
                      behavior: "smooth",
                    }),
                  variant: "primary",
                }}
              />

              <TextBlock
                title="Inputs Avançados"
                textBlock="Campos de entrada com validação em tempo real, estados visuais e suporte completo a acessibilidade."
                icon={<FiMail />}
                variant="gradient"
                size="sm"
                animated
                actionButton={{
                  text: "Testar Agora",
                  onClick: () =>
                    window.scrollTo({
                      top: document.getElementById("inputs")?.offsetTop ?? 0,
                      behavior: "smooth",
                    }),
                  variant: "secondary",
                }}
              />

              <TextBlock
                title="Links Dinâmicos"
                textBlock="Navegação intuitiva com múltiplos estilos, detecção automática de links externos e foco em UX."
                icon={<FiLink />}
                variant="outlined"
                size="sm"
                animated
                actionButton={{
                  text: "Explorar",
                  onClick: () =>
                    window.scrollTo({
                      top: document.getElementById("links")?.offsetTop ?? 0,
                      behavior: "smooth",
                    }),
                  variant: "primary",
                }}
              />
            </div>
          </div>
        </section>

        {/* Interactive Demo */}
        <section id="demo" className="py-16 px-6 bg-dark/30">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-primary mb-4">
                Demonstração Interativa
              </h2>
              <p className="text-lg text-gray-secondary">Experimente nossos componentes em ação</p>
            </div>

            <div className="glass rounded-2xl p-8">
              <div className="space-y-8">
                {/* Form Example */}
                <div className="space-y-6">
                  <h3 className="text-xl font-semibold text-gray-primary">Formulário de Contato</h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Input
                      label="Nome completo"
                      placeholder="Digite seu nome"
                      leftIcon={<FiUser />}
                      variant="outlined"
                    />

                    <Input
                      label="Email"
                      type="email"
                      placeholder="seu@email.com"
                      leftIcon={<FiMail />}
                      variant="outlined"
                      value={email}
                      onChange={handleEmailChange}
                      error={emailError}
                      success={Boolean(email && !emailError)}
                    />
                  </div>

                  <Input
                    label="Mensagem"
                    multiline
                    placeholder="Deixe sua mensagem..."
                    variant="outlined"
                    value={message}
                    onChange={(e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) =>
                      setMessage(e.target.value)
                    }
                    helperText={`${message.length}/500 caracteres`}
                  />

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button size="lg" loading={loading} onClick={handleSubmit} disabled={!email || !!emailError}>
                      Enviar Mensagem
                    </Button>
                    <Button
                      variant="outline"
                      size="lg"
                      onClick={() => {
                        setEmail("");
                        setMessage("");
                        setEmailError("");
                      }}
                    >
                      Limpar
                    </Button>
                  </div>
                </div>

                {/* Inputs Validação e Especial */}
                <div className="space-y-6">
                  <h3 className="text-xl font-semibold text-gray-primary">Validação e Exemplos Especiais</h3>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <Input
                      placeholder="Email válido"
                      leftIcon={<FiMail />}
                      success
                      helperText="Email verificado!"
                      value={validEmail}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => setValidEmail(e.target.value)}
                    />
                    <Input
                      placeholder="Email inválido"
                      leftIcon={<FiMail />}
                      error="Formato de email inválido"
                      value={invalidEmail}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => setInvalidEmail(e.target.value)}
                    />
                    <Input placeholder="Carregando..." loading value="Verificando dados" readOnly />
                  </div>
                </div>

                <div className="space-y-6">
                  <h3 className="text-xl font-semibold text-gray-primary">Tipos Especiais</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <Input
                      type="password"
                      placeholder="Senha segura"
                      leftIcon={<FiSettings />}
                      helperText="Mínimo 8 caracteres"
                    />
                    <Input
                      type="number"
                      placeholder="Idade"
                      leftIcon={<FiCalendar />}
                      min="0"
                      max="120"
                    />
                    <Input
                      multiline
                      placeholder="Sua mensagem..."
                      helperText="Máximo 500 caracteres"
                      onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => {}}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Component Showcase */}
        <section id="examples" className="py-16 px-6">
          <div className="max-w-7xl mx-auto space-y-16">
            {/* Buttons Section */}
            <div id="buttons" className="space-y-8">
              <h3 className="text-2xl font-bold text-gray-primary text-center">Variações de Botões</h3>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="space-y-4">
                  <h4 className="font-semibold text-gray-primary">Estilos Principais</h4>
                  <div className="space-y-3">
                    <Button fullWidth>Primário</Button>
                    <Button variant="secondary" fullWidth>
                      Secundário
                    </Button>
                    <Button variant="outline" fullWidth>
                      Contorno
                    </Button>
                    <Button variant="ghost" fullWidth>
                      Ghost
                    </Button>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="font-semibold text-gray-primary">Tamanhos</h4>
                  <div className="space-y-3">
                    <Button size="sm" fullWidth>
                      Pequeno
                    </Button>
                    <Button size="md" fullWidth>
                      Médio
                    </Button>
                    <Button size="lg" fullWidth>
                      Grande
                    </Button>
                    <Button size="xl" fullWidth>
                      Extra Grande
                    </Button>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="font-semibold text-gray-primary">Com Ícones</h4>
                  <div className="space-y-3">
                    <Button icon={<FiStar />} iconPosition="left" fullWidth>
                      Favoritar
                    </Button>
                    <Button icon={<FiDownload />} iconPosition="left" variant="secondary" fullWidth>
                      Download
                    </Button>
                    <Button icon={<FiArrowRight />} iconPosition="right" variant="outline" fullWidth>
                      Continuar
                    </Button>
                    <Button rounded icon={<FiHeart />} fullWidth>
                      Curtir
                    </Button>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <div className="inline-flex flex-wrap gap-4 p-6 bg-tertiary/10 rounded-2xl">
                  <Button className="theme-violet">Tema Violeta</Button>
                  <Button variant="secondary" className="theme-violet">
                    Secundário Violeta
                  </Button>
                  <Button variant="outline" className="theme-violet">
                    Contorno Violeta
                  </Button>
                </div>
              </div>
            </div>

            {/* Inputs Section */}
            <div id="inputs" className="space-y-8">
              <h3 className="text-2xl font-bold text-gray-primary text-center">Campos de Entrada</h3>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="space-y-4">
                  <h4 className="font-semibold text-gray-primary">Variações</h4>
                  <div className="space-y-4">
                    <Input placeholder="Input padrão" variant="default" />
                    <Input placeholder="Input preenchido" variant="filled" />
                    <Input placeholder="Input contornado" variant="outlined" />
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="font-semibold text-gray-primary">Com Validação</h4>
                  <div className="space-y-4">
                    <Input
                      placeholder="Email válido"
                      leftIcon={<FiMail />}
                      success
                      helperText="Email verificado!"
                      value={validEmail}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => setValidEmail(e.target.value)}
                    />
                    <Input
                      placeholder="Email inválido"
                      leftIcon={<FiMail />}
                      error="Formato de email inválido"
                      value={invalidEmail}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => setInvalidEmail(e.target.value)}
                    />
                    <Input placeholder="Carregando..." loading value="Verificando dados" readOnly />
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="font-semibold text-gray-primary">Tipos Especiais</h4>
                  <div className="space-y-4">
                    <Input
                      type="password"
                      placeholder="Senha segura"
                      leftIcon={<FiSettings />}
                      helperText="Mínimo 8 caracteres"
                    />
                    <Input
                      type="number"
                      placeholder="Idade"
                      leftIcon={<FiCalendar />}
                      min="0"
                      max="120"
                    />
                    <Input
                      multiline
                      placeholder="Sua mensagem..."
                      helperText="Máximo 500 caracteres"
                      onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => {}}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Links Section */}
            <div id="links" className="space-y-8">
              <h3 className="text-2xl font-bold text-gray-primary text-center">Navegação e Links</h3>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="space-y-4">
                  <h4 className="font-semibold text-gray-primary">Estilos</h4>
                  <div className="space-y-3">
                    <div>
                      <Link href="#" variant="default">
                        Link padrão
                      </Link>
                    </div>
                    <div>
                      <Link href="#" variant="button">
                        Link botão
                      </Link>
                    </div>
                    <div>
                      <Link href="#" variant="subtle">
                        Link sutil
                      </Link>
                    </div>
                    <div>
                      <Link href="#" variant="underline">
                        Sublinhado
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="font-semibold text-gray-primary">Com Ícones</h4>
                  <div className="space-y-3">
                    <div>
                      <Link href="#" icon={<FiHome />} iconPosition="left">
                        Início
                      </Link>
                    </div>
                    <div>
                      <Link href="#" icon={<FiFileText />} iconPosition="left">
                        Documentos
                      </Link>
                    </div>
                    <div>
                      <Link href="#" icon={<FiSettings />} iconPosition="left">
                        Configurações
                      </Link>
                    </div>
                    <div>
                      <Link href="#" icon={<FiArrowRight />} iconPosition="right">
                        Próximo
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="font-semibold text-gray-primary">Externos</h4>
                  <div className="space-y-3">
                    <div>
                      <Link href="https://github.com" external>
                        GitHub
                      </Link>
                    </div>
                    <div>
                      <Link href="https://storybook.js.org" external variant="button">
                        Storybook
                      </Link>
                    </div>
                    <div>
                      <Link href="https://tailwindcss.com" external>
                        TailwindCSS
                      </Link>
                    </div>
                    <div>
                      <Link href="#" loading>
                        Carregando
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="font-semibold text-gray-primary">Tema Violeta</h4>
                  <div className="space-y-3">
                    <div>
                      <Link href="#" className="theme-violet">
                        Link violeta
                      </Link>
                    </div>
                    <div>
                      <Link href="#" variant="button" className="theme-violet">
                        Botão violeta
                      </Link>
                    </div>
                    {/* Erro 2322 corrigido: Removido variant="outline", pois não existe esse tipo */}
                    <div>
                      <Link href="#" className="theme-violet">
                        Contorno violeta
                      </Link>
                    </div>
                    <div>
                      <Link href="#" disabled>
                        Desabilitado
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* TextBlocks Section */}
            <div className="space-y-8">
              <h3 className="text-2xl font-bold text-gray-primary text-center">Blocos de Conteúdo</h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <TextBlock
                  title="Desenvolvimento Ágil"
                  textBlock="Acelere seu processo de desenvolvimento com componentes prontos, testados e otimizados para performance."
                  icon={<FiStar />}
                  variant="elevated"
                  actionButton={{
                    text: "Começar Agora",
                    onClick: () => alert("Iniciando desenvolvimento..."),
                    variant: "primary",
                  }}
                />

                <TextBlock
                  title="Design Consistente"
                  textBlock="Mantenha a identidade visual em toda sua aplicação com um sistema de design robusto e flexível."
                  icon={<FiDownload />}
                  variant="gradient"
                  actionButton={{
                    text: "Ver Guia",
                    onClick: () => alert("Abrindo guia de design..."),
                    variant: "secondary",
                  }}
                />

                <TextBlock
                  title="Acessibilidade First"
                  textBlock="Todos os componentes seguem as melhores práticas de acessibilidade (WCAG 2.1) para uma web inclusiva."
                  icon={<FiSettings />}
                  variant="outlined"
                  actionButton={{
                    text: "Saiba Mais",
                    onClick: () => alert("Mais sobre acessibilidade..."),
                    variant: "primary",
                  }}
                />

                <TextBlock
                  title="Performance Otimizada"
                  textBlock="Bundle otimizado, lazy loading e tree shaking garantem carregamento rápido em qualquer dispositivo."
                  icon={<FiArrowRight />}
                  variant="default"
                  actionButton={{
                    text: "Ver Métricas",
                    onClick: () => alert("Mostrando métricas..."),
                    variant: "secondary",
                  }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-dark/50 py-12 px-6 mt-20">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-gradient">ALFABIT</h3>
                <p className="text-gray-secondary">Sistema de design moderno para criar interfaces excepcionais.</p>
                <div className="flex space-x-4">
                  <Link href="https://github.com" external icon={<FiHome />}>
                    GitHub
                  </Link>
                  <Link href="https://storybook.js.org" external icon={<FiFileText />}>
                    Storybook
                  </Link>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="font-semibold text-gray-primary">Componentes</h4>
                <div className="space-y-2">
                  <div>
                    <Link href="#buttons" variant="subtle">
                      Botões
                    </Link>
                  </div>
                  <div>
                    <Link href="#inputs" variant="subtle">
                      Inputs
                    </Link>
                  </div>
                  <div>
                    <Link href="#links" variant="subtle">
                      Links
                    </Link>
                  </div>
                  <div>
                    <Link href="#" variant="subtle">
                      TextBlocks
                    </Link>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="font-semibold text-gray-primary">Recursos</h4>
                <div className="space-y-2">
                  <div>
                    <Link href="#" variant="subtle">
                      Documentação
                    </Link>
                  </div>
                  <div>
                    <Link href="#" variant="subtle">
                      Guia de Estilo
                    </Link>
                  </div>
                  <div>
                    <Link href="#" variant="subtle">
                      Exemplos
                    </Link>
                  </div>
                  <div>
                    <Link href="#" variant="subtle">
                      Changelog
                    </Link>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="font-semibold text-gray-primary">Suporte</h4>
                <div className="space-y-2">
                  <div>
                    <Link href="#" variant="subtle">
                      FAQ
                    </Link>
                  </div>
                  <div>
                    <Link href="#" variant="subtle">
                      Contato
                    </Link>
                  </div>
                  <div>
                    <Link href="#" variant="subtle">
                      Issues
                    </Link>
                  </div>
                  <div>
                    <Link href="#" variant="subtle">
                      Comunidade
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="border-t border-outline/20 mt-8 pt-8 text-center">
              <p className="text-gray-tertiary">
                © 2025 ALFABIT Design System. Desenvolvido por Jose Enoque
              </p>
              <div className="mt-4 flex justify-center space-x-6">
                <Link href="#" variant="subtle" size="sm">
                  Termos de Uso
                </Link>
                <Link href="#" variant="subtle" size="sm">
                  Privacidade
                </Link>
                <Link href="#" variant="subtle" size="sm">
                  Licença
                </Link>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default App;
