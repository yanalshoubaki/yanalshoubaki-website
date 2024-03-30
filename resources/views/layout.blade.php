<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}" x-data="{
    darkMode: localStorage.getItem('darkMode') ||
        localStorage.setItem('darkMode', 'system')
}" x-init="$watch('darkMode', val => localStorage.setItem('darkMode', val))"
    x-bind:class="{
        'dark': darkMode === 'dark' || (darkMode === 'system' && window.matchMedia('(prefers-color-scheme: dark)')
            .matches)
    }">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>Yanal Shoubaki</title>
    <meta name="description"
        content="Software engineer from jordan." />
    <meta name="robots" content="noindex,nofollow" />
    <meta property="og:image" content="{{ URL::asset('default-image.png') }}" />
    @livewireStyles
    @stack('styles')
    @vite(['resources/css/app.css', 'resources/js/app.js'])
</head>

<body>
    <div class="bg-[#D4ECDD] dark:bg-[#214F50] h-screen overflow-hidden">
        <div class="h-screen absolute top-0 bottom-0 left-0 right-0 z-[1]">
            <div class="bg-pattern h-screen dark:bg-pattern-dark opacity-[0.1] bg-cover"></div>
            <div
                class="absolute inset-x-0 bottom-0 flex justify-center w-full h-screen pt-32 pb-8 pointer-events-none bg-gradient-to-t from-secondary-main dark:from-primary-main">
            </div>
        </div>
            @livewire('component.layout.partial.header')

        <main class="h-screen justify-center items-center">
            <div class="container h-full">
                @yield('content')
            </div>
        </main>

    </div>
    @livewireScripts
    @stack('scripts')
</body>

</html>
