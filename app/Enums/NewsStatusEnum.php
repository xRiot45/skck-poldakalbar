<?php

namespace App\Enums;

enum NewsStatusEnum: string
{
    case DRAFT = 'draft';
    case PUBLISHED = 'published';
    case ARCHIVED = 'archived';

    public static function values(): array
    {
        return array_column(self::cases(), 'value');
    }

    public static function names(): array
    {
        return array_column(self::cases(), 'name');
    }

    public static function isValid(string $value): bool
    {
        return in_array($value, self::values(), true);
    }
}
