<?php

namespace App\Filament\Resources\StudetResource\Pages;

use App\Filament\Resources\StudetResource;
use Filament\Actions;
use Filament\Resources\Pages\ViewRecord;

class ViewStudet extends ViewRecord
{
    protected static string $resource = StudetResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\EditAction::make(),
        ];
    }
}
