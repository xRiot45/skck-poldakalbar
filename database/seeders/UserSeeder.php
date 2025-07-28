<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use Spatie\Permission\Models\Role;

class UserSeeder extends Seeder
{
    public function run(): void
    {
        $roles = [
            'super-admin' => Role::where('name', 'super-admin')->first(),
            'admin' => Role::where('name', 'admin')->first(),
            'user' => Role::where('name', 'user')->first(),
        ];

        foreach ($roles as $roleName => $role) {
            if (!$role) {
                $this->command->error("Role '{$roleName}' is missing. Please run RoleSeeder first.");
                return;
            }
        }

        $users = [
            [
                'name' => 'Super Admin',
                'email' => 'superadmin@gmail.com',
                'role' => 'super-admin',
            ],
        ];

        foreach ($users as $userData) {
            $user = User::create([
                'name' => $userData['name'],
                'email' => $userData['email'],
                'email_verified_at' => now(),
                'password' => Hash::make('12345678'),
            ]);

            $user->assignRole($roles[$userData['role']]);
        }
    }
}
