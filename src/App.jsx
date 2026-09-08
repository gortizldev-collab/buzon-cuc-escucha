import React, { useState } from 'react';

// ==========================================
// IMPORTACIÓN DE IMÁGENES
// ==========================================
import logoCuc from './assets/logo-cuc.png';
import heroMailbox from './assets/hero-mailbox.png';
import studentIllustration from './assets/student-illustration.png';

// Imágenes para la sección de categorías
import catBienestar from './assets/cat-bienestar.png';
import catServicios from './assets/cat-servicios.png';
import catClases from './assets/cat-clases.png';
import catInclusion from './assets/cat-inclusion.png';
import catEspacios from './assets/cat-espacios.png';
import catProcesos from './assets/cat-procesos.png';

export default function App() {
  const [formData, setFormData] = useState({
    nombre: '',
    correo: '',
    telefono: '',
    aspecto: '',
    sugerencia: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('¡Sugerencia enviada con éxito!');
    setFormData({ nombre: '', correo: '', telefono: '', aspecto: '', sugerencia: '' });
  };

  // Función para desplazamiento suave a secciones
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Al hacer clic en una categoría, selecciona la opción y baja al formulario
  const handleCategoryClick = (aspectoValue) => {
    setFormData((prev) => ({ ...prev, aspecto: aspectoValue }));
    scrollToSection('formulario');
  };

  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans">
      
      {/* 1. HEADER (PERSISTENTE EN BLANCO) */}
      <header className="sticky top-0 z-50 bg-white text-gray-800 px-6 py-4 flex justify-between items-center shadow-md border-b border-gray-100">
        <div className="flex items-center space-x-3 cursor-pointer" onClick={() => scrollToSection('hero')}>
          <img src={logoCuc} alt="CUC Logo" className="h-12 md:h-14 object-contain" />
        </div>

        <nav className="hidden md:flex space-x-8 text-sm font-semibold">
          <button 
            onClick={() => scrollToSection('hero')} 
            className="text-gray-700 hover:text-[#A8001D] transition-colors"
          >
            Inicio
          </button>
          <button 
            onClick={() => scrollToSection('formulario')} 
            className="text-gray-700 hover:text-[#A8001D] transition-colors"
          >
            Cuestionario
          </button>
          <button 
            onClick={() => scrollToSection('aspectos')} 
            className="text-gray-700 hover:text-[#A8001D] transition-colors"
          >
            Sobre el proyecto
          </button>
        </nav>

        <div className="hidden sm:flex items-center space-x-2 text-xs md:text-sm text-gray-800">
          <svg className="w-6 h-6 text-[#A8001D]" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 3L1 9l11 6 9-4.91V17h2V9L12 3zM3.89 9L12 4.57 20.11 9 12 13.43 3.89 9z" />
          </svg>
          <div className="text-left">
            <p className="font-bold leading-none text-gray-900">Facultad de Ingeniería</p>
            <p className="text-[10px] text-gray-500 leading-tight">CUC</p>
          </div>
        </div>
      </header>

      {/* 2. SECCIÓN HERO */}
      <section id="hero" className="max-w-6xl mx-auto px-6 py-12 md:py-16 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <span className="text-[#A8001D] text-xs font-bold tracking-widest uppercase">
            Tu opinión importa
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mt-2 mb-4 leading-tight">
            Buzón <span className="text-[#A8001D]">CUC</span> Escucha
          </h1>
          <p className="text-gray-600 leading-relaxed mb-8 text-sm md:text-base">
            La Facultad de Ingeniería desea recopilar ideas y sugerencias de los estudiantes para mejorar su experiencia dentro de la Institución en aspectos como bienestar, servicios, clases, inclusión, espacios y procesos académicos.
          </p>
          
          <button 
            onClick={() => scrollToSection('formulario')}
            className="bg-[#A8001D] hover:bg-[#8A0018] text-white font-bold text-sm px-8 py-3.5 rounded-full inline-flex items-center space-x-3 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 cursor-pointer"
          >
            <span>¡Diligencia el cuestionario!</span>
            <span className="text-base font-extrabold">&gt;</span>
          </button>
        </div>

        <div className="relative flex justify-center">
          <img src={heroMailbox} alt="Ilustración Buzón" className="w-full max-w-md object-contain" />
        </div>
      </section>

      {/* 3. SECCIÓN CATEGORÍAS (TAMAÑO COMPACTO RESTAURADO) */}
      <section id="aspectos" className="bg-gray-50 py-12 px-6 border-y border-gray-100">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">¿En qué aspectos puedes opinar?</h2>
          <p className="text-gray-500 text-xs md:text-sm mt-1 mb-8">
            Tu opinión nos ayuda a construir una mejor experiencia universitaria. Haz clic en cualquiera para opinar.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2 md:gap-3">
            {[
              { img: catBienestar, value: 'bienestar', alt: 'Bienestar' },
              { img: catServicios, value: 'servicios', alt: 'Servicios' },
              { img: catClases, value: 'clases', alt: 'Clases' },
              { img: catInclusion, value: 'inclusion', alt: 'Inclusión' },
              { img: catEspacios, value: 'espacios', alt: 'Espacios' },
              { img: catProcesos, value: 'procesos', alt: 'Procesos Académicos' },
            ].map((item, idx) => (
              <div 
                key={idx} 
                onClick={() => handleCategoryClick(item.value)}
                className="overflow-hidden rounded-xl shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 cursor-pointer bg-white border border-gray-100"
              >
                <img 
                  src={item.img} 
                  alt={item.alt} 
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. SECCIÓN FORMULARIO */}
      <section id="formulario" className="max-w-6xl mx-auto px-6 py-16">
        <div className="bg-gray-50 rounded-3xl p-6 md:p-10 border border-gray-200/80 shadow-sm grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          <div className="lg:col-span-2">
            <span className="text-[#A8001D] text-xs font-bold tracking-widest uppercase">Formulario</span>
            <h3 className="text-2xl font-bold text-gray-900 mb-1">Comparte tu sugerencia</h3>
            <p className="text-gray-500 text-xs mb-6">Completa el siguiente formulario. Tu opinión es valiosa y será tomada en cuenta para mejorar.</p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">Nombre completo *</label>
                  <input
                    type="text"
                    name="nombre"
                    placeholder="Tu nombre"
                    value={formData.nombre}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2.5 text-sm bg-white border border-gray-300 rounded-lg focus:outline-none focus:border-[#A8001D] focus:ring-1 focus:ring-[#A8001D]"
                    required
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">Correo institucional *</label>
                  <input
                    type="email"
                    name="correo"
                    placeholder="tu@estudiante.cuc.edu.co"
                    value={formData.correo}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2.5 text-sm bg-white border border-gray-300 rounded-lg focus:outline-none focus:border-[#A8001D] focus:ring-1 focus:ring-[#A8001D]"
                    required
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">Teléfono *</label>
                  <input
                    type="tel"
                    name="telefono"
                    placeholder="Tu número de teléfono"
                    value={formData.telefono}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2.5 text-sm bg-white border border-gray-300 rounded-lg focus:outline-none focus:border-[#A8001D] focus:ring-1 focus:ring-[#A8001D]"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">¿Sobre qué aspecto quieres dar tu sugerencia? *</label>
                <select
                  name="aspecto"
                  value={formData.aspecto}
                  onChange={handleChange}
                  className="w-full px-3.5 py-2.5 text-sm bg-white border border-gray-300 rounded-lg text-gray-700 focus:outline-none focus:border-[#A8001D] focus:ring-1 focus:ring-[#A8001D]"
                  required
                >
                  <option value="">Selecciona una opción</option>
                  <option value="bienestar">Bienestar</option>
                  <option value="servicios">Servicios</option>
                  <option value="clases">Clases</option>
                  <option value="inclusion">Inclusión</option>
                  <option value="espacios">Espacios</option>
                  <option value="procesos">Procesos académicos</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">Tu sugerencia o idea *</label>
                <textarea
                  name="sugerencia"
                  rows="4"
                  maxLength="1000"
                  placeholder="Escribe aquí tu sugerencia..."
                  value={formData.sugerencia}
                  onChange={handleChange}
                  className="w-full px-3.5 py-2.5 text-sm bg-white border border-gray-300 rounded-lg focus:outline-none focus:border-[#A8001D] focus:ring-1 focus:ring-[#A8001D]"
                  required
                ></textarea>
                <div className="text-right text-[10px] text-gray-400 mt-1">
                  {formData.sugerencia.length}/1000
                </div>
              </div>

              <button
                type="submit"
                className="bg-[#A8001D] hover:bg-[#8A0018] text-white text-sm font-semibold px-7 py-3 rounded-xl flex items-center space-x-2 transition-all shadow-md cursor-pointer"
              >
                <svg className="w-4 h-4 transform rotate-45" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
                <span>Enviar sugerencia</span>
              </button>
            </form>
          </div>

          <div className="flex flex-col justify-between items-center text-center bg-white p-6 rounded-2xl border border-gray-200/60 shadow-sm">
            <div>
              <img src={studentIllustration} alt="Estudiante" className="w-full max-w-[200px] mx-auto object-contain" />
            </div>

            <div className="flex items-center space-x-3 text-left bg-red-50 p-3.5 rounded-xl w-full mt-4 border border-red-100">
              <span className="text-2xl">💡</span>
              <div>
                <p className="text-xs font-bold text-gray-900">Cada sugerencia cuenta.</p>
                <p className="text-[11px] text-gray-600">Gracias por ser parte del cambio.</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 5. FOOTER */}
      <footer className="bg-[#A8001D] text-white pt-10 pb-6 text-xs">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-6 items-center border-b border-red-800/60 pb-8">
          <div>
            <img src={logoCuc} alt="CUC Logo" className="h-10 object-contain brightness-0 invert" />
          </div>
          <div className="text-center md:text-left">
            <p className="font-bold text-sm text-white">Facultad de Ingeniería - CUC</p>
            <p className="text-red-100 text-[11px]">Más ideas, mejores experiencias.</p>
          </div>
          
          {/* Contenedor unificado para IG y FB */}
          <div className="flex justify-center md:justify-end space-x-4 text-red-100">
            <a href="https://www.instagram.com/ingenieriacuc/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">IG</a>
            <a href="https://www.facebook.com/UniCostaCOL" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">FB</a>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-6 mt-6 flex flex-col md:flex-row justify-between items-center text-red-100 text-[11px] space-y-3 md:space-y-0">
          <p>© 2026 Corporación Universitaria de la Costa. Todos los derechos reservados.</p>
          <p className="font-medium text-white bg-red-900/40 px-3 py-1 rounded-full border border-red-700/50">
            Realizado por <span className="font-bold underline">Gabriel Ortiz</span> y <span className="font-bold underline">Sofia Varela</span>
          </p>
        </div>
      </footer>
    </div>
  );
}