<?php

namespace Database\Seeders;

use App\Models\Content;
use App\Models\Page;
use App\Models\Section;
use Illuminate\Database\Seeder;

class PageSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $page = Page::create([
            'name' => 'Home Page',
            'slug' => 'home',
            'primary_color' => '#3b82f6'
        ]);

        $hero = $page->sections()->create([
            'type' => 'hero',
            'order' => 1
        ]);

        $hero->contents()->createMany([
            ['key' => 'title', 'value' => 'Building the Future of Tech'],
            ['key' => 'subtitle', 'value' => 'We create modern digital experiences for your brand.'],
            ['key' => 'button_text', 'value' => 'Get Started'],
            ['key' => 'hero_image', 'value' => 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80']
        ]);

        $services = $page->sections()->create([
            'type' => 'services',
            'order' => 2
        ]);

        $services->contents()->createMany([
            ['key' => 'service_1_title', 'value' => 'Web Development'],
            ['key' => 'service_1_description', 'value' => 'Scalable web applications built with the latest technologies.'],
            ['key' => 'service_2_title', 'value' => 'Mobile Apps'],
            ['key' => 'service_2_description', 'value' => 'Seamless and powerful mobile experiences for iOS and Android.'],
            ['key' => 'service_3_title', 'value' => 'Cloud Solutions'],
            ['key' => 'service_3_description', 'value' => 'Robust cloud infrastructure designed to scale with your business.'],
        ]);
    }
}
