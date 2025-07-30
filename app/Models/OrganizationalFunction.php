<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class OrganizationalFunction extends Model
{
    protected $table = 'organizational_functions';

    protected $fillable = [
        'title'
    ];
}
